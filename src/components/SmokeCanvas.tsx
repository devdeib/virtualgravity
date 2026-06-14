"use client";
import { useEffect, useRef } from "react";

export default function SmokeCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { antialias: false, alpha: false });
    if (!gl) return;

    const vs = `attribute vec2 p; void main(){ gl_Position = vec4(p,0.,1.); }`;
    const fs = `
    precision highp float;
    uniform vec2 u_res; uniform float u_t;
    mat2 rot(float a){ float c=cos(a), s=sin(a); return mat2(c,-s,s,c); }
    float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453123); }
    float noise(vec2 p){ vec2 i=floor(p), f=fract(p); vec2 u=f*f*(3.-2.*f);
      return mix(mix(hash(i),hash(i+vec2(1.,0.)),u.x), mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),u.x),u.y); }
    float fbm(vec2 p){ float v=0., a=.52; mat2 m=rot(.5);
      for(int i=0;i<5;i++){ v+=a*noise(p); p=m*p*1.95; a*=.5; } return v; }
    void main(){
      vec2 uv = gl_FragCoord.xy/u_res.xy; vec2 p=uv; p.x*=u_res.x/u_res.y;
      float t=u_t*.02;
      vec2 q=vec2(fbm(p*.9 + t), fbm(p*.9 + vec2(5.2,1.3) - t*.7));
      float f=fbm(p*1.0 + 2.0*q);
      float n2=fbm(p*.85 + 1.6*q + vec2(3.7,8.1) - t*.5);
      float base=(1.-uv.y)*1.0 + (1.-uv.x)*.3 + (f-.5)*1.3;
      float purple=smoothstep(.55,1.15,base);
      float channel=smoothstep(.38,.5,n2)*smoothstep(.68,.54,n2);
      float rimMask=smoothstep(.3,.8,base);
      float rimA=smoothstep(.345,.385,n2)*smoothstep(.41,.385,n2);
      float rimB=smoothstep(.675,.705,n2)*smoothstep(.73,.705,n2);
      float rim=(rimA+rimB)*rimMask;
      float halo=(smoothstep(.3,.39,n2)*smoothstep(.46,.39,n2)+smoothstep(.64,.71,n2)*smoothstep(.78,.71,n2))*rimMask;
      float d=purple*(1.-channel*.92);
      vec3 col=vec3(0.012,0.006,0.03);
      col=mix(col, vec3(0.082,0.04,0.20), smoothstep(.08,.35,d));
      col=mix(col, vec3(0.208,0.102,0.447), smoothstep(.3,.62,d));
      col=mix(col, vec3(0.243,0.102,0.588), smoothstep(.6,.85,d));
      col=mix(col, vec3(0.31,0.098,0.859), smoothstep(.84,1.0,d));
      col+=vec3(0.15,0.075,0.36)*halo*.5;
      col+=vec3(0.38,0.22,0.78)*rim*.7;
      col+=vec3(0.72,0.62,0.97)*pow(rim,2.)*.3;
      gl_FragColor=vec4(col,1.);
    }`;

    function sh(type: number, src: string) {
      const s = gl!.createShader(type)!;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      return s;
    }
    const prog = gl.createProgram()!;
    gl.attachShader(prog, sh(gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW
    );
    const loc = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_res");
    const uT = gl.getUniformLocation(prog, "u_t");

    function resize() {
      const c = canvas!;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
      const w = Math.floor(c.clientWidth * dpr);
      const h = Math.floor(c.clientHeight * dpr);
      if (c.width !== w || c.height !== h) {
        c.width = w;
        c.height = h;
        gl!.viewport(0, 0, w, h);
      }
    }

    let raf = 0;
    const start = performance.now();
    const frame = () => {
      resize();
      gl!.uniform2f(uRes, canvas!.width, canvas!.height);
      gl!.uniform1f(uT, (performance.now() - start) / 1000);
      gl!.drawArrays(gl!.TRIANGLES, 0, 3);
      raf = requestAnimationFrame(frame);
    };
    frame();

    return () => cancelAnimationFrame(raf);
  }, []);

  return <canvas ref={ref} className="smoke" />;
}

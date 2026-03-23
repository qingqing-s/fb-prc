"use client";
import { useEffect, useRef } from "react";

export default function MicroApp() {
  const loadRef = useRef(false);

  useEffect(() => {
    if (!loadRef?.current) {
      import("qiankun").then(({registerMicroApps, start})=>{
        console.log(213213);
        
        registerMicroApps([
          {
            name: "react app", // app name registered
            entry: "http://localhost:8080/",
            container: "#root",
            activeRule: "/app1",
          },
          {
            name: "vue app",
            entry: { scripts: ["//localhost:7100/main.js"] },
            container: "#container",
            activeRule: "/yourActiveRule2",
          },
        ]);
        start();
        loadRef.current = true;
      })
    }
  }, []);

  return null;
}

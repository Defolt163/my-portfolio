'use client'
import { useEffect, useState } from "react";

export default function SmoothBackground(){
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [smoothCoords, setSmoothCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
        setCoords({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    useEffect(() => {
        let animationFrameId;

        const smoothMove = () => {
        setSmoothCoords((prev) => ({
            x: prev.x + (coords.x - prev.x) * 0.07, // 0.1 - коэффициент сглаживания
            y: prev.y + (coords.y - prev.y) * 0.07,
        }));
        animationFrameId = requestAnimationFrame(smoothMove);
        };

        animationFrameId = requestAnimationFrame(smoothMove);

        return () => {
        cancelAnimationFrame(animationFrameId);
        };
    }, [coords]);
    return(
        <>
            <div className='background_cursor_gradient' style={{maskImage: `radial-gradient(600px at ${Math.round(smoothCoords.x)}px ${Math.round(smoothCoords.y)}px, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 100%)`}}></div>
            <div className='background' style={{maskImage: `radial-gradient(600px at ${Math.round(smoothCoords.x)}px ${Math.round(smoothCoords.y)}px, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 100%)`}}></div>
        </>
    )
}
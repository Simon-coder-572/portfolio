import React, { useEffect, useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaDocker } from "react-icons/fa";
import {
    SiTypescript,
    SiTailwindcss,
    SiMysql,
    SiProxmox,
    SiNginx,
    SiTruenas,
    SiGrafana,
    SiCloudflare
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FaWindows, FaPhp, FaNodeJs } from "react-icons/fa";

const Skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-5xl" />, level: "Expert" },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-5xl" />, level: "Expert" },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" />, level: "Advanced" },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400 text-5xl" />, level: "Basic" },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400 text-5xl" />, level: "Basic" },
    { name: "PHP", icon: <FaPhp className="text-purple-500 text-5xl" />, level: "Basic" },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" />, level: "Intermediate" },
    { name: "MySQL", icon: <SiMysql className="text-blue-300 text-5xl" />, level: "Intermediate" },
    { name: "Docker", icon: <FaDocker className="text-blue-400 text-5xl" />, level: "Advanced" },
    { name: "Proxmox", icon: <SiProxmox className="text-orange-400 text-5xl" />, level: "Advanced" },
    { name: "TrueNAS", icon: <SiTruenas className="text-blue-600 text-5xl" />, level: "Intermediate" },
    { name: "Nginx", icon: <SiNginx className="text-green-400 text-5xl" />, level: "Basic" },
    { name: "Grafana", icon: <SiGrafana className="text-orange-400 text-5xl" />, level: "Intermediate" },
    { name: "Azure", icon: <VscAzure className="text-blue-600 text-5xl" />, level: "Intermediate" },
    { name: "Windows Server", icon: <FaWindows className="text-blue-500 text-5xl" />, level: "Intermediate" },
    { name: "Cloudflare", icon: <SiCloudflare className="text-orange-400 text-5xl" />, level: "Intermediate" },
];


export function SkillSection() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(max-width: 640px)");
        const handler = (e) => setIsMobile(e.matches);
        setIsMobile(mq.matches);
        if (mq.addEventListener) {
            mq.addEventListener("change", handler);
            return () => mq.removeEventListener("change", handler);
        } else {
            mq.addListener(handler);
            return () => mq.removeListener(handler);
        }
    }, []);

    // render één of twee groepen; between-groups geen extra gap
    const groups = isMobile ? [Skills] : [Skills, Skills, Skills, Skills, Skills, Skills, Skills];

    return (
        <section className="py-16 skill-section flex flex-col items-center">
            <br />
            <h2 className="text-4xl font-extrabold text-center mb-12 skill-title">
                My Skills
            </h2>

            <div className="overflow-hidden scroll-viewport flex justify-center w-full">
                <div className="flex animate-scroll">
                    {groups.map((group, gi) => (
                        <div key={gi} className="skill-list flex">
                            {group.map((skill, i) => (
                                <div
                                    key={`${skill.name}-${gi}-${i}`}
                                    className="skill-card flex-shrink-0 w-48 h-48 rounded-2xl flex flex-col items-center justify-center transition-transform duration-300"
                                >
                                    {skill.icon}
                                    <span className="mt-3 font-bold text-lg skill-name">{skill.name}</span>
                                    <span className="mt-1 text-sm skill-level">{skill.level}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <br />
            <button className="default" onClick={() => (window.location.href = "/skills")}>See all skills</button>
            <br />

            <style jsx>{`
                .skill-section {
                    background: var(--bg-color-3);
                    color: var(--text-color);
                }
                .skill-title {
                    color: var(--text-color);
                }

                /* Viewport: zorg dat het maximaal 100% breed is */
                .scroll-viewport {
                    max-width: 100%;
                    box-sizing: border-box;
                }

                .animate-scroll {
                    display: flex;
                    align-items: center;
                    animation: scroll 200s linear infinite;
                    width: max-content;
                    box-sizing: border-box;
                    will-change: transform;
                }

                /* Elke groep bevat de gap tussen kaarten; er is géén extra gap tussen groep A en B */
                .skill-list {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    margin-right: 1.5rem;
                }

                @keyframes scroll {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }

                .skill-card {
                    background: var(--card-bg);
                    color: var(--text-color);
                    border: 1px solid rgba(255,255,255,0.06);
                    flex: 0 0 auto;
                    margin: 0; /* geen extra margin die een gat kan veroorzaken */
                }

                .skill-name {
                    color: var(--text-color);
                    font-size: 1rem;
                }

                .skill-level {
                    color: var(--text-color-soft);
                }

                /* Mobile: disable animation en maak 2-koloms layout */
                @media (max-width: 640px) {
                    .animate-scroll {
                        animation: none;
                        flex-wrap: wrap;
                        justify-content: center;
                        width: 100%;
                        max-width: 100%;
                    }
                    /* op mobile wrappen we de kaarten, gebruik kleinere gap */
                    .skill-list {
                        gap: 0.75rem;
                        flex-wrap: wrap;
                        justify-content: center;
                    }
                    .skill-list .skill-card {
                        width: calc(50% - 0.75rem);
                        margin-bottom: 1.5rem;
                    }
                }
            `}</style>
        </section>
    );
}

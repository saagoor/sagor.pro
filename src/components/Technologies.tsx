import JavaScript from "./technology-icons/JavaScript";
import TypeScript from "./technology-icons/TypeScript";
import Vue from "./technology-icons/Vue";
import React from "./technology-icons/React";
import NextJs from "./technology-icons/NextJs";
import PHP from "./technology-icons/PHP";
import Laravel from "./technology-icons/Laravel";
import Linux from './technology-icons/Linux';
import Docker from "./technology-icons/Docker";
import Kubernetes from './technology-icons/Kubernetes';

const commonClassNames = 'text-white bg-gray-800';
const iconCommonClassNames = 'h-8 sm:h-10';

const technologies = [
    {
        name: "JavaScript",
        icon: JavaScript,
        classNames: null,
        iconClassNames: null,
    },
    {
        name: "TypeScript",
        icon: TypeScript,
        classNames: null,
        iconClassNames: null,
    },
    {
        name: "Vue",
        icon: Vue,
        classNames: null,
        iconClassNames: null,
    },
    {
        name: "React",
        icon: React,
        classNames: null,
        iconClassNames: null,
    },
    {
        name: "Next.js",
        icon: NextJs,
        classNames: null,
        iconClassNames: null,
    },
    {
        name: "PHP",
        icon: PHP,
        classNames: null,
        iconClassNames: null,
    },
    {
        name: "Laravel",
        icon: Laravel,
        classNames: null,
        iconClassNames: null,
    },
    {
        name: "Linux",
        icon: Linux,
        classNames: null,
        iconClassNames: 'h-10 sm:h-12 invert',
    },
    {
        name: "Docker",
        icon: Docker,
        classNames: null,
        iconClassNames: null,
    },
    {
        name: "Kubernetes",
        icon: Kubernetes,
        classNames: null,
        iconClassNames: null,
    },
];

export default function Technologies() {
    return <>
        {technologies.map((technology) => {
            const IconComponent = technology.icon;
            return (
                <div key={technology.name} className="flex flex-col items-center">
                    <div className={`flex items-center justify-center w-16 h-16 p-2 mb-2 rounded-full sm:w-20 sm:h-20 ${technology.classNames ? technology.classNames : commonClassNames}`}>
                        <IconComponent className={technology.iconClassNames || iconCommonClassNames} />
                    </div>
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-200">
                        {technology.name}
                    </div>
                </div>
            );
        })}
    </>;
}
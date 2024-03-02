"use client";
import React from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
} from "framer-motion";
import PlainCard from "@components/ui/cards/PlainCard";
import ThreeDCard from "../cards/AnimatedCard";


export const HeroParallax = ({
    products,
}: {
    products: {
        title: string;
        link: string;
        thumbnail: string;
    }[];
}) => {
    const firstRow = products.slice(0, 3);
    const secondRow = products.slice(3, 6);
    const thirdRow = products.slice(6, 10);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
        springConfig
    );
    return (
        <div
            ref={ref}
            className="h-[320vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((product) => (
                        <ThreeDCard
                            product={product}
                            key={product.title}
                            translate={translateX}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row space-x-20 mb-20">
                    {secondRow.map((product) => (
                        <ThreeDCard
                            product={product}
                            key={product.title}
                            translate={translateXReverse}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((product) => (
                        <ThreeDCard
                            product={product}
                            key={product.title}
                            translate={translateX}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = () => {
    return (
        <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
            <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
                The Ultimate <br /> development studio
            </h1>
            <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
                We build beautiful products with the latest technologies and frameworks.
                We are a team of passionate developers and designers that love to build
                amazing products.
            </p>
        </div>
    );
};



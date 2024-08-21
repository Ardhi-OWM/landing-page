import React from "react";

import Section from "./Section";
import { curve } from "../assets";
import Button from "./Button";

const Hero = () => {
    return (
        <Section
            className="pt-[12rem] -mt-[5.25rem]"
            crosses
            crossesOffSet="lg:translate-y-[5.25rem]"
            customPaddings
            id="hero">

            <div className="container relative">
                <div
                    className="relative z-1 max-w-[62 rem] mx-auto text-center 
            mb-[4rem md:mb-20 lg:mb:[6rem] ">
                    <h1 className="h1 mb-6">
                        Easily visualize and Transform Geospatial Data with &nbsp;
                        <span className="inline-block relative">
                            Ardhi{" "}
                            <img src={curve}
                                alt="Curve"
                                className="absolute top-full left-0 w-full xl:-mt-2"
                                width={624}
                                height={28}
                            />
                        </span>
                    </h1>
                    <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                        Unlock the Power of Geospatial Analysis Effortlessly with Ardhi—Your Gateway to Insightful, Data-Driven Decisions.
                    </p>
                    <Button href="/signup" white>
                        Get Started
                    </Button>
                </div>
                <div>

                </div>
            </div>
        </Section>
    );
};
//console.log("Hero component is rendering -ochwada");
export default Hero;

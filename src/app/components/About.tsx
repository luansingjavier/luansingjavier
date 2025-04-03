"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-accent">
              Full-Stack & Mobile Developer
            </h3>
            <p className="text-gray-300 mb-4">
              I&apos;m a results-driven software developer with expertise in
              mobile, web, and cloud solutions. With 7+ years of experience, I
              specialize in building scalable, high-performance applications
              from design to deployment.
            </p>
            <p className="text-gray-300 mb-6">
              My passion lies in creating elegant solutions that leverage modern
              technologies like React Native, React, TypeScript, and Node.js.
              I&apos;m also experienced with PHP frameworks like Laravel and
              CodeIgniter.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-white mb-2">Location</h4>
                <p className="text-gray-400">Naga City, Philippines 🇵🇭</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Experience</h4>
                <p className="text-gray-400">7+ Years</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Availability</h4>
                <p className="text-gray-400">Freelance / Remote</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Languages</h4>
                <p className="text-gray-400">English, Filipino</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4 text-accent">
              Technical Skills
            </h3>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300">React Native / React</span>
                  <span className="text-gray-400">95%</span>
                </div>
                <div className="w-full bg-gray-light rounded-full h-2">
                  <div
                    className="bg-accent h-2 rounded-full"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300">TypeScript / JavaScript</span>
                  <span className="text-gray-400">90%</span>
                </div>
                <div className="w-full bg-gray-light rounded-full h-2">
                  <div
                    className="bg-accent h-2 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300">Node.js</span>
                  <span className="text-gray-400">85%</span>
                </div>
                <div className="w-full bg-gray-light rounded-full h-2">
                  <div
                    className="bg-accent h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300">
                    PHP (Laravel, CodeIgniter)
                  </span>
                  <span className="text-gray-400">80%</span>
                </div>
                <div className="w-full bg-gray-light rounded-full h-2">
                  <div
                    className="bg-accent h-2 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300">DevOps & CI/CD</span>
                  <span className="text-gray-400">75%</span>
                </div>
                <div className="w-full bg-gray-light rounded-full h-2">
                  <div
                    className="bg-accent h-2 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

"use client";

import React from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  Calendar, 
  FileText, 
  Zap, 
  Clock, 
  Target, 
  Brain,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F6F7FB]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#655BDF] to-[#5449cf] text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Powered by Gemma 4</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Your AI Assistant That
              <br />
              <span className="bg-gradient-to-r from-[#E5A445] to-[#EEEDFB] bg-clip-text text-transparent">
                Actually Takes Action
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Stop juggling tasks, calendars, and documents. Zynqo AI learns your workflow, 
              automates the boring stuff, and helps you focus on what matters.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link 
                href="/app"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#655BDF] rounded-lg font-semibold text-lg hover:bg-[#EEEDFB] transition-all hover:scale-105 shadow-xl"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="#features"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all"
              >
                Learn More
              </Link>
            </div>
            
            <p className="text-xs text-white/60 pt-4">
              * This landing page was AI-generated using Kiro IDE
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#292C40] mb-4">
              Everything You Need to Stay Productive
            </h2>
            <p className="text-lg text-[#70758B] max-w-2xl mx-auto">
              Zynqo AI combines intelligent automation with a beautiful interface 
              to help you accomplish more in less time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1: Task Management */}
            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-[#E8EAF2] hover:border-[#655BDF]/30">
              <div className="w-14 h-14 bg-[#EEEDFB] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-7 h-7 text-[#655BDF]" />
              </div>
              <h3 className="text-xl font-bold text-[#292C40] mb-3">
                Task Management
              </h3>
              <p className="text-[#70758B] leading-relaxed">
                Organize, prioritize, and track your tasks with AI-powered suggestions 
                and intelligent reminders.
              </p>
            </div>

            {/* Feature 2: Smart Planning */}
            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-[#E8EAF2] hover:border-[#655BDF]/30">
              <div className="w-14 h-14 bg-[#EEEDFB] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="w-7 h-7 text-[#655BDF]" />
              </div>
              <h3 className="text-xl font-bold text-[#292C40] mb-3">
                Smart Planning
              </h3>
              <p className="text-[#70758B] leading-relaxed">
                Let AI analyze your schedule and create optimal time blocks for 
                maximum productivity.
              </p>
            </div>

            {/* Feature 3: Document Assistance */}
            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-[#E8EAF2] hover:border-[#655BDF]/30">
              <div className="w-14 h-14 bg-[#EEEDFB] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileText className="w-7 h-7 text-[#655BDF]" />
              </div>
              <h3 className="text-xl font-bold text-[#292C40] mb-3">
                Document Assistance
              </h3>
              <p className="text-[#70758B] leading-relaxed">
                Summarize documents, extract insights, and get answers from your 
                files instantly.
              </p>
            </div>

            {/* Feature 4: Automation */}
            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-[#E8EAF2] hover:border-[#655BDF]/30">
              <div className="w-14 h-14 bg-[#EEEDFB] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7 text-[#655BDF]" />
              </div>
              <h3 className="text-xl font-bold text-[#292C40] mb-3">
                Automation
              </h3>
              <p className="text-[#70758B] leading-relaxed">
                Automate repetitive workflows and let AI handle routine tasks 
                with your permission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#292C40] mb-4">
              Why Choose Zynqo AI?
            </h2>
            <p className="text-lg text-[#70758B] max-w-2xl mx-auto">
              Built for modern professionals who want to work smarter, not harder.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Benefit 1: Save Time */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-[#655BDF] to-[#5449cf] rounded-2xl flex items-center justify-center mx-auto">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#292C40]">
                Save Time
              </h3>
              <p className="text-[#70758B] leading-relaxed">
                Reclaim hours every week by automating routine tasks and getting 
                instant answers to your questions.
              </p>
            </div>

            {/* Benefit 2: Stay Organized */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-[#655BDF] to-[#5449cf] rounded-2xl flex items-center justify-center mx-auto">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#292C40]">
                Stay Organized
              </h3>
              <p className="text-[#70758B] leading-relaxed">
                Keep all your tasks, documents, and schedules in one place with 
                intelligent categorization.
              </p>
            </div>

            {/* Benefit 3: Work Smarter */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-[#655BDF] to-[#5449cf] rounded-2xl flex items-center justify-center mx-auto">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#292C40]">
                Work Smarter
              </h3>
              <p className="text-[#70758B] leading-relaxed">
                Learn from AI-powered insights and personalized suggestions that 
                adapt to your workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#655BDF] to-[#5449cf] rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals using Zynqo AI to get more done 
              with less effort. Start your journey today.
            </p>
            <Link 
              href="/app"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-[#655BDF] rounded-xl font-bold text-lg hover:bg-[#EEEDFB] transition-all hover:scale-105 shadow-xl"
            >
              Get Started Free
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#292C40] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Zynqo AI</h3>
            <p className="text-white/70">
              Your AI Assistant That Actually Takes Action
            </p>
            <p className="text-white/50 text-sm">
              Built with ❤️ using Gemma 4, Next.js, and Kiro IDE
            </p>
            <p className="text-white/40 text-xs pt-2">
              Hacktoberfest Hack Day Faisalabad x Himmatkaar 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

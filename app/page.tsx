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
  ArrowRight
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Notion Navy Band */}
      <section className="relative overflow-hidden bg-[#0a1530] text-white">
        <div className="absolute inset-0 opacity-5">
          {/* Decorative dots pattern */}
          <div className="absolute top-20 left-[10%] w-3 h-3 bg-[#5645d4] rounded-full"></div>
          <div className="absolute top-40 right-[15%] w-4 h-4 bg-[#ff64c8] rounded-full"></div>
          <div className="absolute bottom-32 left-[20%] w-3 h-3 bg-[#2a9d99] rounded-full"></div>
          <div className="absolute bottom-20 right-[25%] w-2 h-2 bg-[#f5d75e] rounded-full"></div>
        </div>
        
        <div className="relative max-w-[1280px] mx-auto px-8 py-24 md:py-32">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="text-sm font-medium">Powered by Gemma 4</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[80px] font-semibold tracking-[-2px] leading-[1.05]">
              Stop juggling tasks.
              <br />
              Start getting things done.
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Your AI assistant that doesn't just chat—it completes tasks, organizes your schedule, 
              and automates workflows while you focus on what matters.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link 
                href="/app"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#5645d4] text-white rounded-lg font-medium text-base hover:bg-[#4534b3] transition-colors shadow-lg"
              >
                Get Zynqo free
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="#features"
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-white/30 text-white rounded-lg font-medium text-base hover:bg-white/10 transition-colors"
              >
                See how it works
              </Link>
            </div>
          </div>
          
          {/* Workspace Mockup Card */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl border border-[#e5e3df] shadow-[0_24px_48px_-8px_rgba(15,15,15,0.2)] overflow-hidden">
              <div className="p-6 border-b border-[#e5e3df]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#e03131]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#f5d75e]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#1aae39]"></div>
                </div>
              </div>
              <div className="aspect-video bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="text-[#37352f] text-xl font-semibold">Zynqo AI Workspace</div>
                  <div className="text-[#787671] text-sm">Your intelligent assistant interface</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-24">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-semibold tracking-[-1px] leading-[1.10] text-[#1a1a1a] mb-4">
              Built for real work
            </h2>
            <p className="text-lg text-[#787671] max-w-2xl mx-auto">
              Everything you need to manage tasks, schedule, and documents in one place.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1: Task Management - Mint */}
            <div className="bg-[#d9f3e1] rounded-xl p-8 border-0">
              <div className="w-12 h-12 bg-[#1aae39] bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle2 className="w-6 h-6 text-[#1aae39]" />
              </div>
              <h3 className="text-xl font-semibold text-[#37352f] mb-3">
                Task Management
              </h3>
              <p className="text-[#37352f]/80 leading-relaxed">
                Create tasks in seconds. Get smart reminders. No overwhelm, just progress.
              </p>
            </div>

            {/* Feature 2: Smart Planning - Sky */}
            <div className="bg-[#dcecfa] rounded-xl p-8 border-0">
              <div className="w-12 h-12 bg-[#0075de] bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-[#0075de]" />
              </div>
              <h3 className="text-xl font-semibold text-[#37352f] mb-3">
                Smart Planning
              </h3>
              <p className="text-[#37352f]/80 leading-relaxed">
                AI suggests the best time for deep work, meetings, and breaks.
              </p>
            </div>

            {/* Feature 3: Document Intelligence - Peach */}
            <div className="bg-[#ffe8d4] rounded-xl p-8 border-0">
              <div className="w-12 h-12 bg-[#dd5b00] bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-[#dd5b00]" />
              </div>
              <h3 className="text-xl font-semibold text-[#37352f] mb-3">
                Document Intelligence
              </h3>
              <p className="text-[#37352f]/80 leading-relaxed">
                Upload documents, ask questions, get instant summaries.
              </p>
            </div>

            {/* Feature 4: Automation - Lavender */}
            <div className="bg-[#e6e0f5] rounded-xl p-8 border-0">
              <div className="w-12 h-12 bg-[#7b3ff2] bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-[#7b3ff2]" />
              </div>
              <h3 className="text-xl font-semibold text-[#37352f] mb-3">
                Automation
              </h3>
              <p className="text-[#37352f]/80 leading-relaxed">
                Set it once, forget forever. You stay in control, AI does the work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bold Yellow Banner */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="bg-[#f9e79f] rounded-xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#37352f] mb-4">
              Ask your AI assistant anything
            </h2>
            <p className="text-lg text-[#37352f]/80 max-w-2xl mx-auto mb-8">
              From scheduling meetings to summarizing documents, Zynqo handles it all with Gemma 4's 
              multimodal intelligence.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/50 rounded-full text-sm font-medium text-[#37352f]">
              256K context window · Native function calling · Multimodal understanding
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-24 bg-[#fafaf9]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-semibold tracking-[-1px] leading-[1.10] text-[#1a1a1a] mb-4">
              Why teams choose Zynqo
            </h2>
            <p className="text-lg text-[#787671] max-w-2xl mx-auto">
              Built for professionals who want their tools to work as hard as they do.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-xl p-8 border border-[#e5e3df]">
              <div className="w-14 h-14 bg-[#5645d4] bg-opacity-10 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-[#5645d4]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-3">
                Save 5-10 hours weekly
              </h3>
              <p className="text-[#787671] leading-relaxed">
                Stop doing busywork. Spend time on what you actually care about.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-xl p-8 border border-[#e5e3df]">
              <div className="w-14 h-14 bg-[#7b3ff2] bg-opacity-10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#7b3ff2]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-3">
                Everything in one place
              </h3>
              <p className="text-[#787671] leading-relaxed">
                No more hunting through tabs and apps. It's all right here.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-xl p-8 border border-[#e5e3df]">
              <div className="w-14 h-14 bg-[#2a9d99] bg-opacity-10 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-[#2a9d99]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-3">
                Gets better over time
              </h3>
              <p className="text-[#787671] leading-relaxed">
                Learns your patterns, suggests better workflows, adapts to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-8">
          <div className="bg-[#f6f5f4] rounded-xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#1a1a1a] mb-6">
              Ready to work smarter?
            </h2>
            <p className="text-lg text-[#787671] mb-8 max-w-2xl mx-auto">
              Join professionals using Zynqo to get more done with less effort.
            </p>
            <Link 
              href="/app"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#5645d4] text-white rounded-lg font-medium text-base hover:bg-[#4534b3] transition-colors shadow-lg"
            >
              Get started free
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#e5e3df] py-12">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold text-[#1a1a1a]">Zynqo AI</h3>
            <p className="text-[#787671]">
              The assistant that actually does stuff
            </p>
            <p className="text-[#a4a097] text-sm">
              Built with Gemma 4, Next.js, and Kiro IDE
            </p>
            <p className="text-[#bbb8b1] text-xs pt-2">
              Hacktoberfest Hack Day Faisalabad x Himmatkaar 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

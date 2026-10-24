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
      {/* Hero Section - Deep Gradient */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
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
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-2xl shadow-indigo-500/50 hover:scale-105"
              >
                Get Zynqo free
                <ArrowRight className="w-6 h-6" strokeWidth={2.5} />
              </Link>
              <Link 
                href="#features"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-semibold text-lg hover:bg-white/20 hover:border-white/50 transition-all"
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
            {/* Feature 1: Task Management - Vibrant Green */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-xl p-8 border-0 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30">
                <CheckCircle2 className="w-9 h-9 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Task Management
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Create tasks in seconds. Get smart reminders. No overwhelm, just progress.
              </p>
            </div>

            {/* Feature 2: Smart Planning - Bold Blue */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 border-0 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                <Calendar className="w-9 h-9 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Smart Planning
              </h3>
              <p className="text-gray-700 leading-relaxed">
                AI suggests the best time for deep work, meetings, and breaks.
              </p>
            </div>

            {/* Feature 3: Document Intelligence - Warm Orange */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-xl p-8 border-0 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30">
                <FileText className="w-9 h-9 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Document Intelligence
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Upload documents, ask questions, get instant summaries.
              </p>
            </div>

            {/* Feature 4: Automation - Vibrant Purple */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl p-8 border-0 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30">
                <Zap className="w-9 h-9 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Automation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Set it once, forget forever. You stay in control, AI does the work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bold Gradient Banner */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="bg-gradient-to-br from-amber-400 via-orange-400 to-amber-500 rounded-2xl p-12 md:p-16 text-center shadow-2xl shadow-amber-500/30">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Ask your AI assistant anything
            </h2>
            <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-8">
              From scheduling meetings to summarizing documents, Zynqo handles it all with Gemma 4's 
              multimodal intelligence.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-900 shadow-lg">
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
            <div className="bg-white rounded-xl p-10 border border-gray-200 hover:border-indigo-300 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Save 5-10 hours weekly
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Stop doing busywork. Spend time on what you actually care about.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-xl p-10 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Everything in one place
              </h3>
              <p className="text-gray-600 leading-relaxed">
                No more hunting through tabs and apps. It's all right here.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-xl p-10 border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
                <Brain className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Gets better over time
              </h3>
              <p className="text-gray-600 leading-relaxed">
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

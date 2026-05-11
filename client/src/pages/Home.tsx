import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Zap, Heart, TrendingUp, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

/**
 * RoutineFit Homepage - Korean Version (Final Update)
 * Design Philosophy: Trust + Stability + Food-Centric (음식 중심의 건강 관리)
 * Color Palette: Primary Green (#10B981), Primary Blue (#0EA5E9), Accent Teal (#14B8A6)
 * Typography: Noto Sans KR (모든 연령대 가독성 최적화)
 */

export default function Home() {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [currentCookingStep, setCurrentCookingStep] = useState(0);

  const screenshots = [
    {
      image: "/manus-storage/Screenshot_20260511_164625_Chrome_c386ce72.jpg",
      title: "홈 대시보드",
      desc: "오늘의 건강 점수와 주요 지표를 한눈에 확인하세요"
    },
    {
      image: "/manus-storage/Screenshot_20260511_164634_Chrome_13b4a7ec.jpg",
      title: "음식 기록",
      desc: "사진 한 장으로 음식을 인식하고 영양 정보를 자동 분석"
    },
    {
      image: "/manus-storage/Screenshot_20260511_164704_Chrome_3abb6b2a.jpg",
      title: "건강 분석",
      desc: "AI가 분석한 건강 패턴과 개선 사항을 확인하세요"
    },
    {
      image: "/manus-storage/Screenshot_20260511_164714_Chrome_95c31bc8.jpg",
      title: "주간 리포트",
      desc: "건강 개선 추이를 시각화하고 AI 인사이트를 받아보세요"
    },
    {
      image: "/manus-storage/Screenshot_20260511_164721_Chrome_ccfffe04.jpg",
      title: "운동 추적",
      desc: "일일 활동량과 운동 기록을 자동으로 추적합니다"
    },
    {
      image: "/manus-storage/Screenshot_20260511_164745_Chrome_a33d91f5.jpg",
      title: "수면 관리",
      desc: "수면 패턴을 기록하고 개선 방법을 제안받으세요"
    },
    {
      image: "/manus-storage/Screenshot_20260511_164825_Chrome_1dac64da.jpg",
      title: "혈압 기록",
      desc: "일일 혈압 변화를 추적하고 건강 상태를 모니터링하세요"
    },
    {
      image: "/manus-storage/Screenshot_20260511_164838_Chrome_46f73b79.jpg",
      title: "맞춤 제안",
      desc: "AI가 당신의 건강 데이터를 분석해 개인화된 조언을 제공합니다"
    },
    {
      image: "/manus-storage/Screenshot_20260511_164852_Chrome_64b1ef79.jpg",
      title: "AI 채팅",
      desc: "언제든 AI 건강 어시스턴트와 상담하세요"
    },
    {
      image: "/manus-storage/Screenshot_20260511_164913_Chrome_a581e153.jpg",
      title: "설정 및 프로필",
      desc: "개인 건강 정보를 관리하고 앱 설정을 커스터마이즈하세요"
    }
  ];

  const cookingSteps = [
    {
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663607358559/7unLf8XtsqoDAFGSxfpHx2/cooking-step1-refrigerator-UvBuhk6v8U35V2VujBe6HG.webp",
      title: "냉장고 재료 촬영",
      desc: "냉장고 안의 재료들을 사진으로 찍어 AI에게 전달하세요."
    },
    {
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663607358559/7unLf8XtsqoDAFGSxfpHx2/cooking-step2-ai-analysis-RrVBjMsKgdNtMiRStm9w85.webp",
      title: "AI 분석 및 제안",
      desc: "AI가 당신의 건강 상태, 영양 필요도, 요리 능력을 고려해 3가지 요리를 추천합니다."
    },
    {
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663607358559/7unLf8XtsqoDAFGSxfpHx2/cooking-step3-recipe-selection-26SPboxRaqxkLVZ3QMMFUV.webp",
      title: "최적의 요리 선택",
      desc: "추천된 요리 중 가장 적합한 것을 선택하고, 실시간 조리법 가이드를 받으세요."
    }
  ];

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
  };

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const nextCookingStep = () => {
    setCurrentCookingStep((prev) => (prev + 1) % cookingSteps.length);
  };

  const prevCookingStep = () => {
    setCurrentCookingStep((prev) => (prev - 1 + cookingSteps.length) % cookingSteps.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="font-bold text-xl text-foreground">루틴핏</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground hover:text-primary transition">기능</a>
            <a href="#cooking" className="text-foreground hover:text-primary transition">음식</a>
            <a href="#personalization" className="text-foreground hover:text-primary transition">맞춤형</a>
            <a href="#screenshots" className="text-foreground hover:text-primary transition">앱 화면</a>
            <a href="#faq" className="text-foreground hover:text-primary transition">FAQ</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">앱 다운로드</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                당신만을 위한<br />
                <span className="text-primary">AI 건강 주치의</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                복잡한 건강 관리는 이제 그만. 루틴핏이 당신의 개인 맞춤형 건강 솔루션을 제공합니다. 사진, 음성, 텍스트로 3초 만에 기록하고, AI 분석을 통해 실질적인 건강 변화를 경험하세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  지금 시작하기 <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline">
                  자세히 알아보기
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>무료 시작</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>신용카드 불필요</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663607358559/7unLf8XtsqoDAFGSxfpHx2/hero-korean-AktcM38Tep8mvLTKPkjFvE.webp"
                alt="루틴핏 앱 인터페이스"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              건강 관리, 왜 어려울까요?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              기존 건강 앱의 한계를 루틴핏이 해결합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Problems */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground mb-6">기존 앱의 한계</h3>
              {[
                "복잡한 수동 입력으로 기록 부담이 높음",
                "단순 통계만 제공하고 개인화 없음",
                "일반적인 조언만 반복됨",
                "2주 내 80% 이탈률"
              ].map((problem, idx) => (
                <div key={idx} className="flex gap-3 p-4 bg-white rounded-lg border border-border">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-sm">✕</span>
                  </div>
                  <p className="text-foreground">{problem}</p>
                </div>
              ))}
            </div>

            {/* Solutions */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary mb-6">루틴핏의 해결책</h3>
              {[
                "사진·음성·텍스트로 3초 만에 자동 기록",
                "AI가 패턴을 분석해 인과관계 도출",
                "개인 건강 데이터 기반 맞춤형 추천",
                "즉각 피드백으로 습관 형성"
              ].map((solution, idx) => (
                <div key={idx} className="flex gap-3 p-4 bg-white rounded-lg border border-primary/20">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-foreground">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4 Health Elements Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              건강의 4대 요소
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              루틴핏은 건강을 4가지 핵심 요소로 정의하고 통합 관리합니다.
            </p>
          </div>

          <div className="relative mb-12">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663607358559/7unLf8XtsqoDAFGSxfpHx2/health-4-elements-korean-4sbv6UD9B38MUNjULsi4fU.webp"
              alt="건강의 4대 요소"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section id="features" className="py-20 md:py-32 bg-blue-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              루틴핏의 핵심 기능
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              복잡한 건강 관리를 간단하고 효과적으로 만드는 기능들
            </p>
          </div>

          <div className="mb-12">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663607358559/7unLf8XtsqoDAFGSxfpHx2/feature-easy-input-korean-3kXg84P9wzY54poS7Hm98x.webp"
              alt="3초 입력 기능"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-primary" />,
                title: "3초 입력",
                desc: "사진 1장, 음성 10초, 텍스트 한 줄로 기록 완료. 입력 시간 90% 단축."
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-primary" />,
                title: "AI 초개인화 분석",
                desc: "Claude Sonnet 기반 AI가 당신의 건강 데이터를 분석해 맞춤형 제안을 제공합니다."
              },
              {
                icon: <Heart className="w-8 h-8 text-primary" />,
                title: "즉각 피드백",
                desc: "기록 즉시 점수 표시 및 반응 제공. 행동 변화를 유도합니다."
              }
            ].map((feature, idx) => (
              <Card key={idx} className="p-8 hover:shadow-lg transition">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Cooking Recommendation Section - Enhanced */}
      <section id="cooking" className="py-20 md:py-32 bg-green-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              AI 맞춤 요리 추천
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              루틴핏의 가장 강력한 기능 - 냉장고 재료로 당신의 건강을 위한 요리를 추천받으세요
            </p>
          </div>

          {/* Cooking Steps with Images */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Step Image */}
              <div className="relative aspect-video md:aspect-auto md:h-[500px] flex items-center justify-center bg-gray-50">
                <img
                  src={cookingSteps[currentCookingStep].image}
                  alt={cookingSteps[currentCookingStep].title}
                  className="h-full w-auto object-contain"
                />
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevCookingStep}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition flex items-center justify-center hover:bg-primary hover:text-white"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextCookingStep}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition flex items-center justify-center hover:bg-primary hover:text-white"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Info Section */}
              <div className="bg-gradient-to-r from-primary to-accent p-6 md:p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{cookingSteps[currentCookingStep].title}</h3>
                <p className="text-white/90">{cookingSteps[currentCookingStep].desc}</p>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {cookingSteps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentCookingStep(idx)}
                  className={`w-3 h-3 rounded-full transition ${
                    idx === currentCookingStep ? "bg-primary w-8" : "bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* AI Cooking Basis */}
          <div className="bg-white rounded-2xl p-8 border-2 border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-8">AI 요리 추천의 기준</h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-bold text-primary mb-4">AI가 고려하는 요소</h4>
                <ul className="space-y-3">
                  {[
                    "현재의 건강 상태 (혈당, 혈압, 체중 등)",
                    "현재 영양 상태 및 부족한 영양소",
                    "냉장고 안의 재료 보유 현황",
                    "사용자의 요리 능력 정도"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-4">제안 시 중점 사항</h4>
                <ul className="space-y-3">
                  {[
                    "요리의 영양가 - 건강에 최적화",
                    "요리의 난이도 - 실제 조리 가능성",
                    "재료의 가성비 - 경제적 효율성",
                    "조리 시간 - 바쁜 일상에 맞춤"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Additional Basis */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border-l-4 border-primary">
              <h4 className="font-bold text-foreground mb-4">추가 기준 - 더욱 정교한 추천</h4>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">1</div>
                  <div>
                    <p className="font-bold text-foreground">6개의 기초설문을 바탕으로 당신의 주치의가 준비되어 있는 상태</p>
                    <p className="text-sm text-muted-foreground mt-1">건강 목표, 식이 선호도, 알레르기, 운동 수준, 생활 패턴, 질환 이력 등을 파악하여 초기 프로필 구성</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">2</div>
                  <div>
                    <p className="font-bold text-foreground">7일간의 사용자 입력 데이터 분석으로 최선의 요리추천</p>
                    <p className="text-sm text-muted-foreground mt-1">당신의 선호음식, 당신의 요리수준, 당신의 일상패턴을 다 파악하는 상태로 진화</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">3</div>
                  <div>
                    <p className="font-bold text-foreground">냉장고안 재료를 바탕으로 위 두사항들을 고려해 최선의 음식 추천</p>
                    <p className="text-sm text-muted-foreground mt-1">개인의 건강 프로필 + 7일 데이터 + 현재 냉장고 재료 = 최적화된 맞춤 요리 제안</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots Gallery Section */}
      <section id="screenshots" className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              루틴핏 앱 화면 둘러보기
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              앱의 주요 기능을 직관적으로 확인하세요
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Screenshot Display */}
              <div className="relative aspect-video md:aspect-auto md:h-[600px] flex items-center justify-center bg-gray-50">
                <img
                  src={screenshots[currentScreenshot].image}
                  alt={screenshots[currentScreenshot].title}
                  className="h-full w-auto object-contain"
                />
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevScreenshot}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition flex items-center justify-center hover:bg-primary hover:text-white"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextScreenshot}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition flex items-center justify-center hover:bg-primary hover:text-white"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Info Section */}
              <div className="bg-gradient-to-r from-primary to-accent p-6 md:p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{screenshots[currentScreenshot].title}</h3>
                <p className="text-white/90">{screenshots[currentScreenshot].desc}</p>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8 flex-wrap">
              {screenshots.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentScreenshot(idx)}
                  className={`w-2 h-2 rounded-full transition ${
                    idx === currentScreenshot ? "bg-primary w-6" : "bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personalization Section */}
      <section id="personalization" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              모든 사람을 위한 맞춤형 솔루션
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              루틴핏의 AI는 당신의 상황을 이해하고, 건강한 삶을 설계합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🩸",
                title: "혈압 관리",
                desc: "고혈압으로 고민하는 분들을 위해 저염 식단과 운동 루틴을 맞춤 제안합니다."
              },
              {
                icon: "🍬",
                title: "혈당 관리",
                desc: "당뇨 전단계 또는 당뇨병 환자를 위한 혈당 안정화 식단과 활동 계획을 제공합니다."
              },
              {
                icon: "⚖️",
                title: "체중 감량",
                desc: "건강한 체중 감량을 위해 개인의 기초대사량을 고려한 식단과 운동을 제안합니다."
              },
              {
                icon: "💪",
                title: "근력 증강",
                desc: "근손실 예방과 근력 강화가 필요한 분들을 위한 단백질 식단과 운동 프로그램을 제공합니다."
              },
              {
                icon: "🦴",
                title: "골다공증 예방",
                desc: "칼슘과 비타민D 섭취를 강화하고 뼈 건강을 위한 운동을 추천합니다."
              },
              {
                icon: "🧠",
                title: "피로 회복",
                desc: "만성 피로를 겪는 분들을 위해 에너지 보충 식단과 휴식 패턴을 최적화합니다."
              },
              {
                icon: "🫀",
                title: "심혈관 건강",
                desc: "심장 건강을 위해 오메가3 식단과 유산소 운동을 맞춤 구성합니다."
              },
              {
                icon: "🌙",
                title: "수면 개선",
                desc: "불면증 개선을 위해 저녁 식단, 카페인 섭취 시간, 휴식 루틴을 최적화합니다."
              },
              {
                icon: "🫧",
                title: "소화 건강",
                desc: "소화 불편함을 겪는 분들을 위해 장 건강 식단과 배변 활동을 추적합니다."
              },
              {
                icon: "✨",
                title: "피부 건강",
                desc: "피부 건강을 위해 항산화 식품과 수분 섭취, 수면 패턴을 종합 관리합니다."
              }
            ].map((scenario, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition border-2 border-primary/10 hover:border-primary/30">
                <div className="text-3xl mb-3">{scenario.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{scenario.title}</h3>
                <p className="text-muted-foreground text-sm">{scenario.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              누구를 위한 앱인가요?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              루틴핏은 건강 관리가 필요한 모든 사람을 위한 앱입니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "40~60대 만성질환 관리자",
                desc: "고혈압, 당뇨, 다이어트 등 질환 관리가 필요한 중장년층"
              },
              {
                title: "1인 가구 전 연령",
                desc: "건강한 식단 관리가 어려운 1인 가구"
              },
              {
                title: "주부 및 보호자",
                desc: "가족의 건강을 챙기는 주부와 보호자"
              },
              {
                title: "다이어트 및 체질 개선 성인",
                desc: "건강한 생활습관을 원하는 모든 성인"
              }
            ].map((target, idx) => (
              <Card key={idx} className="p-8 border-2 border-primary/20 hover:border-primary transition">
                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{target.title}</h3>
                    <p className="text-muted-foreground">{target.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              사용자 후기
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              루틴핏과 함께 건강한 변화를 경험한 사용자들의 이야기
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663607358559/7unLf8XtsqoDAFGSxfpHx2/testimonial-korean-2xJxMu5Vy7mWpeTJ5Xv42s.webp"
              alt="사용자 후기"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Competitive Advantage Section */}
      <section className="py-20 md:py-32 bg-green-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              루틴핏의 차별화된 경쟁력
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              기능이 아니라 데이터가 경쟁력입니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "복제 불가 데이터 자산",
                desc: "사용자의 실제 행동·결과 데이터는 외부 수집 불가. 시간 기반 축적으로만 가능한 고유 자산입니다."
              },
              {
                title: "행동-결과 인과 분석",
                desc: "단순 수치가 아닌 '식단 → 체중 변화' 같은 인과 데이터를 분석해 최적 전략을 제시합니다."
              },
              {
                title: "한국 50~60대 특화 데이터",
                desc: "글로벌 빅테크도 보유하지 못한 한국 중장년층의 고유 건강 데이터입니다."
              }
            ].map((advantage, idx) => (
              <Card key={idx} className="p-8 bg-white border-2 border-accent/20 hover:border-accent transition">
                <h3 className="text-lg font-bold text-foreground mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* UX Principles Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              루틴핏의 UX 설계 원칙
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              모든 연령대가 쉽게 이용할 수 있는 직관적 디자인
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { num: "1", title: "3초 입력", desc: "사진, 음성, 텍스트로 빠르게" },
              { num: "2", title: "즉각 피드백", desc: "기록 즉시 반응 제공" },
              { num: "3", title: "한 화면 한 행동", desc: "복잡한 메뉴 없음" },
              { num: "4", title: "큰 글씨·버튼", desc: "50~60대 가독성 우선" },
              { num: "5", title: "3일 기준", desc: "3일 이상 사용 가능" }
            ].map((principle, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {principle.num}
                </div>
                <h3 className="font-bold text-foreground mb-2">{principle.title}</h3>
                <p className="text-sm text-muted-foreground">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              자주 묻는 질문
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "루틴핏은 정말 무료인가요?",
                a: "네, 기본 기능은 완전히 무료입니다. 개인화 분석과 전문 코칭 등 프리미엄 기능은 유료 구독으로 이용할 수 있습니다."
              },
              {
                q: "내 건강 데이터는 안전한가요?",
                a: "모든 데이터는 암호화되어 안전하게 저장됩니다. 개인정보보호법을 완벽히 준수하며, 당신의 데이터는 당신의 것입니다."
              },
              {
                q: "60대도 쉽게 사용할 수 있나요?",
                a: "네, 루틴핏은 50~60대 사용자를 위해 특별히 설계되었습니다. 큰 글씨, 큰 버튼, 단순한 흐름으로 모든 연령대가 쉽게 사용할 수 있습니다."
              },
              {
                q: "AI 분석은 의료 조언을 대체할 수 있나요?",
                a: "아니요, 루틴핏은 의료 전문가를 대체하지 않습니다. 건강 관리를 위한 보조 도구이며, 중요한 건강 결정은 항상 의료 전문가와 상담하세요."
              }
            ].map((faq, idx) => (
              <Card key={idx} className="p-6 hover:shadow-md transition">
                <h3 className="font-bold text-foreground mb-3 flex items-start gap-3">
                  <span className="text-primary font-bold">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-muted-foreground ml-6">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            루틴핏과 함께 당신의 건강 여정을 시작하세요. 무료로 시작하고, 언제든지 업그레이드할 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              앱 다운로드 <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              더 알아보기
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">R</span>
                </div>
                <span className="font-bold">루틴핏</span>
              </div>
              <p className="text-sm opacity-70">당신만을 위한 AI 건강 주치의</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">제품</h4>
              <ul className="space-y-2 text-sm opacity-70">
                <li><a href="#" className="hover:opacity-100 transition">기능</a></li>
                <li><a href="#" className="hover:opacity-100 transition">가격</a></li>
                <li><a href="#" className="hover:opacity-100 transition">다운로드</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">회사</h4>
              <ul className="space-y-2 text-sm opacity-70">
                <li><a href="#" className="hover:opacity-100 transition">소개</a></li>
                <li><a href="#" className="hover:opacity-100 transition">블로그</a></li>
                <li><a href="#" className="hover:opacity-100 transition">채용</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">법률</h4>
              <ul className="space-y-2 text-sm opacity-70">
                <li><a href="#" className="hover:opacity-100 transition">개인정보처리방침</a></li>
                <li><a href="#" className="hover:opacity-100 transition">이용약관</a></li>
                <li><a href="#" className="hover:opacity-100 transition">문의</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm opacity-70">
            <p>&copy; 2026 RoutineFit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight, CheckCircle2, ChevronLeft, ChevronRight,
  Play, X, ExternalLink,
  Activity, Moon, Scale, Bone, Brain, Thermometer,
  Stethoscope, Apple, Dumbbell, Baby, Heart, Zap, TrendingUp,
  BookOpen, Users, ChevronDown, ChevronUp
} from "lucide-react";
import { useState, useRef } from "react";

/* ─────────────────────────────────────────────────────────────────
   타입 정의
───────────────────────────────────────────────────────────────── */
type MainTab = "philosophy" | "health" | "routinefit" | "personalization" | "guide";

/* ─────────────────────────────────────────────────────────────────
   1. 개발철학 섹션
───────────────────────────────────────────────────────────────── */
function PhilosophySection() {
  const [activeSub, setActiveSub] = useState("why");

  const subs = [
    { id: "why", label: "1-1  왜 루틴핏인가" },
    { id: "needs", label: "1-2  현대인이 진짜 필요로 하는 것" },
    { id: "ai", label: "1-3  AI 혼자로는 부족한 이유" },
    { id: "stages", label: "1-4  루틴핏 개발 6단계" },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-0 min-h-[600px]">
      {/* 소목차 사이드바 */}
      <aside className="md:w-64 flex-shrink-0 bg-[#0F1B3D] text-white">
        <div className="p-6">
          <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">개발철학</div>
          <nav className="space-y-1">
            {subs.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSub(s.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all ${
                  activeSub === s.id
                    ? "bg-primary text-white font-bold"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {s.label}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* 콘텐츠 영역 */}
      <main className="flex-1 bg-white p-10 md:p-14 overflow-y-auto">

        {/* 1-1 왜 루틴핏인가 */}
        {activeSub === "why" && (
          <div>
            <div className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-5 border border-primary/20">개발철학 1-1</div>
            <h2 className="text-4xl font-bold text-foreground mb-3">왜 루틴핏인가</h2>
            <div className="w-16 h-1 bg-primary rounded mb-10" />

            <blockquote className="border-l-4 border-primary bg-primary/5 px-6 py-5 rounded-r-xl mb-8">
              <p className="text-xl font-bold text-foreground leading-relaxed">
                "세상에 단 한 명, 바로 앱 사용자만을 위한 AI 주치의"
              </p>
            </blockquote>

            <p className="text-foreground leading-relaxed mb-6 text-lg">
              루틴핏의 개발 철학은 단순합니다. <strong>기능이 많은 앱이 아니라, 단 한 명에게 완전히 맞춤화된 앱</strong>입니다.
              AI가 개인의 음식·운동·활동·혈압·수면·체성분·복용 약·스트레스를 종합적으로 분석하여 매일 맞춤 제안을 제공합니다.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-10">
              개인 서비스의 고도화 극대화. 이는 인공지능 시대가 나아가는 방향입니다.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "🎯", title: "초개인화", desc: "단 한 명을 위한 완전 맞춤형 건강 관리. 모든 제안은 당신의 데이터에서 출발합니다." },
                { icon: "🤖", title: "AI 종합 분석", desc: "음식·운동·수면·혈압·복약을 하나의 AI가 통합 분석하여 인과관계를 도출합니다." },
                { icon: "📈", title: "매일 진화", desc: "사용할수록 나를 더 잘 아는 AI. 3일 이상 사용하면 분석의 정확도가 급격히 높아집니다." },
              ].map((item) => (
                <Card key={item.title} className="p-6 border border-primary/20 shadow-sm hover:border-primary/40 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* 1-2 현대인이 진짜 필요로 하는 것 */}
        {activeSub === "needs" && (
          <div>
            <div className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-5 border border-primary/20">개발철학 1-2</div>
            <h2 className="text-4xl font-bold text-foreground mb-3">현대인이 진짜 필요로 하는 것</h2>
            <div className="w-16 h-1 bg-primary rounded mb-10" />

            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              현대인은 건강에 관심이 많지만, 막상 무엇을 어떻게 해야 할지 모릅니다.
              루틴핏은 이 간극을 메우기 위해 만들어졌습니다.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { icon: "💪", title: "건강한 몸", items: ["전반적 체력 향상", "근육량·체지방 균형", "수면·회복력 개선", "면역력 증진"] },
                { icon: "⚖️", title: "다이어트", items: ["체중 감량 목표 설정", "칼로리·영양 균형 관리", "식단 습관 교정", "운동 연계 체중 관리"] },
                { icon: "🩸", title: "당뇨 관리", items: ["혈당 안정화 식단", "저GI 식품 관리", "운동·식사 타이밍", "복약 기록 연동"] },
                { icon: "❤️", title: "혈압 관리", items: ["저나트륨 식단 유도", "스트레스 관리 연계", "운동 강도 조절", "혈압 변화 추적"] },
              ].map((cat) => (
                <Card key={cat.title} className="p-5 border border-primary/20 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{cat.icon}</span>
                    <h3 className="font-bold text-foreground">{cat.title}</h3>
                  </div>
                  <ul className="space-y-1">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-blue-50 rounded-xl p-6 border-l-4 border-primary">
              <p className="text-sm text-foreground leading-relaxed">
                <strong>그 외에도</strong> 두피·모발 케어, 수면·피로 개선, 근골격계 통증 관리, 정신건강, 내분비계, 소화기계, 재활·회복, 가족 건강 통합 관리 등
                삶의 전 영역에 걸친 건강 문제를 루틴핏이 함께합니다.
              </p>
            </div>
          </div>
        )}

        {/* 1-3 AI 혼자로는 부족한 이유 */}
        {activeSub === "ai" && (
          <div>
            <div className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-5 border border-primary/20">개발철학 1-3</div>
            <h2 className="text-4xl font-bold text-foreground mb-3">루틴핏이 중요한 이유</h2>
            <p className="text-xl text-primary font-semibold mb-2">— AI 혼자로는 부족한 이유</p>
            <div className="w-16 h-1 bg-primary rounded mb-10" />

            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              ChatGPT에게 건강 질문을 하면 훌륭한 답변을 받을 수 있습니다. 그러나 그것만으로는 실제 건강이 나아지지 않습니다.
              왜일까요?
            </p>

            <div className="space-y-4 mb-10">
              {[
                {
                  icon: "📊",
                  title: "AI는 '나의 데이터'가 없다",
                  desc: "일반 AI는 당신이 어제 무엇을 먹었는지, 혈압이 얼마인지, 얼마나 잤는지 모릅니다. 루틴핏은 매일 쌓이는 당신만의 데이터를 기반으로 분석합니다.",
                  color: "border-primary/25 bg-primary/5",
                },
                {
                  icon: "🔄",
                  title: "AI는 '지속성'을 만들지 못한다",
                  desc: "건강은 하루의 결심이 아니라 매일의 루틴에서 만들어집니다. 루틴핏은 기록·분석·피드백의 반복 사이클로 습관 형성을 설계합니다.",
                  color: "border-primary/20 bg-emerald-50",
                },
                {
                  icon: "🎯",
                  title: "AI는 '맥락'을 이해하지 못한다",
                  desc: "오늘 무릎이 아픈 이유가 어제 무리한 운동 때문인지, 날씨 때문인지, 식단 때문인지 — 루틴핏은 당신의 전체 맥락을 연결해 분석합니다.",
                  color: "border-primary/25 bg-primary/5",
                },
                {
                  icon: "⏰",
                  title: "AI는 '타이밍'을 알려주지 않는다",
                  desc: "복약 알림, 운동 타이밍, 식사 간격 — 건강 관리는 정보가 아니라 적시의 행동 유도입니다. 루틴핏은 당신의 일상 리듬에 맞춰 개입합니다.",
                  color: "border-primary/20 bg-emerald-50",
                },
              ].map((item) => (
                <div key={item.title} className={`flex gap-4 p-5 rounded-xl border-2 ${item.color}`}>
                  <span className="text-3xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <blockquote className="border-l-4 border-primary bg-primary/5 px-6 py-4 rounded-r-xl">
              <p className="font-bold text-foreground">
                루틴핏 = AI의 지능 × 나의 데이터 × 매일의 루틴
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                세 가지가 결합될 때 비로소 실질적인 건강 변화가 시작됩니다.
              </p>
            </blockquote>
          </div>
        )}

        {/* 1-4 루틴핏 개발 6단계 */}
        {activeSub === "stages" && (
          <div>
            <div className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-5 border border-primary/20">개발철학 1-4</div>
            <h2 className="text-4xl font-bold text-foreground mb-3">루틴핏 개발 6단계</h2>
            <div className="w-16 h-1 bg-primary rounded mb-10" />

            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              루틴핏은 기능 개발이 아닌 <strong>"사람"에서 시작하는 6단계 프로세스</strong>를 따릅니다.
              기술이 아니라 사용자의 삶을 먼저 설계합니다.
            </p>

            <div className="space-y-4">
              {[
                { num: "01", title: "사용자 발견", desc: "건강 관리가 필요한 실제 사람을 만나고, 그들의 구체적인 어려움을 경청합니다. 데이터가 아닌 이야기에서 출발합니다.", color: "bg-primary" },
                { num: "02", title: "문제 정의", desc: "수집된 이야기에서 반복되는 패턴을 찾아 핵심 문제를 정의합니다. '기록이 귀찮다', '조언이 너무 일반적이다' 같은 구체적 불편함입니다.", color: "bg-primary/90" },
                { num: "03", title: "솔루션 설계", desc: "문제에 대응하는 기능을 설계합니다. 3초 입력, AI 초개인화 분석, 즉각 피드백 — 모든 기능은 실제 문제의 해답입니다.", color: "bg-primary/80" },
                { num: "04", title: "프로토타입 제작", desc: "빠르게 작동하는 버전을 만들어 실제 사용자에게 테스트합니다. 완벽함보다 빠른 검증을 우선합니다.", color: "bg-emerald-600" },
                { num: "05", title: "반복 개선", desc: "사용자 피드백을 즉시 반영하여 개선합니다. 루틴핏은 지금도 매주 업데이트되고 있습니다.", color: "bg-emerald-700" },
                { num: "06", title: "데이터 축적", desc: "사용자가 늘수록 AI가 더 정확해집니다. 한국 중장년층 특화 건강 데이터는 루틴핏만의 고유 자산입니다.", color: "bg-emerald-800" },
              ].map((step, i) => (
                <div key={step.num} className="flex gap-4 items-start">
                  <div className={`w-12 h-12 ${step.color} text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                    {step.num}
                  </div>
                  <div className="flex-1 pb-4 border-b border-border last:border-0">
                    <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                  {i < 5 && (
                    <div className="hidden md:block w-px h-full bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   2. 건강 섹션
───────────────────────────────────────────────────────────────── */
function HealthSection() {
  const [activeSub, setActiveSub] = useState("four");

  const subs = [
    { id: "four", label: "2-1  건강결정 4대 요소" },
    { id: "order", label: "2-2  왜 이 순서?" },
    { id: "goodfood", label: "2-3  좋은 음식이란?" },
    { id: "gap", label: "2-4  아는 사람과 모르는 사람의 격차" },
    { id: "recovery", label: "2-5  건강 회복의 여건과 조건" },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-0 min-h-[600px]">
      <aside className="md:w-64 flex-shrink-0 bg-[#0F4D2F] text-white">
        <div className="p-6">
          <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">건강</div>
          <nav className="space-y-1">
            {subs.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSub(s.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all ${
                  activeSub === s.id
                    ? "bg-primary text-white font-bold"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {s.label}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      <main className="flex-1 bg-white p-10 md:p-14 overflow-y-auto">

        {/* 2-1 건강결정 4대 요소 */}
        {activeSub === "four" && (
          <div>
            <div className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-5 border border-primary/20">건강 2-1</div>
            <h2 className="text-4xl font-bold text-foreground mb-3">건강을 결정하는 4가지</h2>
            <div className="w-16 h-1 bg-primary rounded mb-10" />

            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              루틴핏은 건강을 4가지 핵심 요소로 정의합니다. 중요도는 같지만 우선순위와 접근 방식이 다릅니다.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                { num: "01", icon: "🥗", title: "좋은 음식", subtitle: "영양 & 식단", desc: "신체의 항상성을 유지하고 질병을 예방하는 생명 유지의 핵심 기제. 루틴핏의 핵심 집중 영역입니다.", color: "from-green-500 to-emerald-600", priority: "최우선" },
                { num: "02", icon: "🏃", title: "좋은 움직임", subtitle: "활동 & 운동", desc: "일상 활동과 운동을 포함한 신체 움직임 전반. 음식과 함께 루틴핏이 가장 집중하는 영역입니다.", color: "from-blue-500 to-cyan-600", priority: "핵심" },
                { num: "03", icon: "🚽", title: "좋은 배변", subtitle: "소화 & 배출", desc: "좋은 음식과 움직임이 자연히 만들어내는 결과. 건강의 바로미터입니다.", color: "from-amber-500 to-orange-500", priority: "결과" },
                { num: "04", icon: "😴", title: "좋은 휴식", subtitle: "수면 & 회복", desc: "다른 3가지에 비해 진입 장벽이 낮습니다. 피곤하면 쉬고, 졸리면 자는 것이 기본입니다.", color: "from-purple-500 to-violet-600", priority: "기본" },
              ].map((item) => (
                <Card key={item.num} className="overflow-hidden border border-primary/20 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                  <div className={`bg-gradient-to-r ${item.color} p-5 text-white`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-3xl">{item.icon}</span>
                      <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded-full">{item.priority}</span>
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-sm opacity-80">{item.subtitle}</p>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <p className="text-sm text-foreground leading-relaxed">
                <strong>루틴핏의 존재 이유:</strong> 4가지를 균형 있게 유지하는 전체 루틴 설계.
                가장 어렵고 개인차가 큰 것은 "좋은 음식"과 "좋은 움직임"이며, 이것이 루틴핏의 핵심 집중 영역입니다.
              </p>
            </div>
          </div>
        )}

        {/* 2-2 왜 이 순서? */}
        {activeSub === "order" && (
          <div>
            <div className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-5 border border-primary/20">건강 2-2</div>
            <h2 className="text-4xl font-bold text-foreground mb-3">왜 이 순서인가?</h2>
            <p className="text-xl text-primary font-semibold mb-2">4대 요소의 인과 관계</p>
            <div className="w-16 h-1 bg-primary rounded mb-10" />

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4 p-5 bg-primary/5 rounded-xl border-2 border-primary/25">
                <span className="text-4xl">🥗</span>
                <ArrowRight className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                <span className="text-4xl">🏃</span>
                <ArrowRight className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                <span className="text-4xl">🚽</span>
                <div className="ml-2">
                  <p className="font-bold text-foreground">인과 관계</p>
                  <p className="text-sm text-muted-foreground">좋은 음식을 먹고 좋은 움직임을 하면 → 좋은 배변이 자연히 따라옵니다.</p>
                </div>
              </div>

              <div className="p-5 bg-emerald-50 rounded-xl border-2 border-emerald-200">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">😴</span>
                  <h3 className="font-bold text-foreground">좋은 휴식 — 진입 장벽이 낮다</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  잠은 자야 하고, 피곤하면 쉬게 됩니다. 다른 3가지에 비해 의지력이 덜 필요합니다.
                  그래서 루틴핏은 음식과 움직임에 더 집중합니다.
                </p>
              </div>

              <div className="p-5 bg-primary/5 rounded-xl border-2 border-primary/20">
                <h3 className="font-bold text-foreground mb-2">🎯 루틴핏의 핵심 집중 영역</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  가장 어렵고 개인차가 큰 것은 <strong>"좋은 음식"</strong>과 <strong>"좋은 움직임"</strong>입니다.
                  무엇이 나에게 좋은 음식인지, 어떤 운동이 나에게 맞는지는 사람마다 다릅니다.
                  루틴핏 AI는 바로 이 개인차를 데이터로 해결합니다.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 2-3 좋은 음식이란? */}
        {activeSub === "goodfood" && (
          <div>
            <div className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-5 border border-primary/20">건강 2-3</div>
            <h2 className="text-4xl font-bold text-foreground mb-3">좋은 음식이란 무엇인가?</h2>
            <div className="w-16 h-1 bg-primary rounded mb-10" />

            <blockquote className="border-l-4 border-primary bg-primary/5 px-6 py-4 rounded-r-xl mb-8">
              <p className="text-foreground leading-relaxed">
                '좋은 음식'은 단순히 배고픔을 달래는 수단을 넘어, 신체의 항상성을 유지하고 정신적 안녕을 제공하며
                질병을 예방하는 <strong>생명 유지의 핵심 기제</strong>입니다.
              </p>
            </blockquote>

            <div className="space-y-6">
              {[
                {
                  num: "1",
                  title: "영양학적 균형과 밀도",
                  content: "좋은 음식은 우리 몸에 필요한 필수 영양소(탄수화물, 단백질, 지방, 비타민, 미네랄)를 적절한 비율로 포함해야 합니다. 특히 영양 밀도(Nutrient Density)가 높은 음식이 중요합니다. 칼로리 대비 비타민, 미네랄, 식이섬유 함량이 높은 자연 상태의 식품(Whole Foods)이 이에 해당합니다.",
                  color: "bg-primary/5 border-primary/25",
                },
                {
                  num: "2",
                  title: "혈당 조절과 대사 안정성",
                  content: "현대인의 만성 질환 대부분은 인슐린 저항성에서 비롯됩니다. 당지수(GI, Glycemic Index)가 낮아 혈당을 완만하게 올리는 음식이 좋은 음식의 핵심 조건입니다. 정제된 탄수화물보다는 통곡물, 채소 위주의 식단이 대사 건강을 지키는 근간이 됩니다.",
                  color: "bg-emerald-50 border-emerald-200",
                },
                {
                  num: "3",
                  title: "심리적 만족과 지속 가능성",
                  content: "음식은 즐거움의 원천이기도 합니다. 아무리 영양학적으로 완벽해도 개인의 기호와 문화를 무시한 식단은 지속될 수 없습니다. 심리적 포만감을 주면서도 일상에서 꾸준히 섭취할 수 있는 음식이 진정으로 '좋은 음식'의 범주에 포함됩니다.",
                  color: "bg-primary/5 border-primary/25",
                },
              ].map((item) => (
                <div key={item.num} className={`p-6 rounded-xl border-2 ${item.color}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">{item.num}</div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2-4 격차 */}
        {activeSub === "gap" && (
          <div>
            <div className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-5 border border-primary/20">건강 2-4</div>
            <h2 className="text-4xl font-bold text-foreground mb-3">좋은 음식을 먹는 사람과</h2>
            <p className="text-xl text-primary font-semibold mb-2">모르는 사람의 격차, 그 원인은 무엇인가?</p>
            <div className="w-16 h-1 bg-primary rounded mb-10" />

            <p className="text-muted-foreground mb-8 leading-relaxed">
              모든 사람이 건강한 식단의 중요성을 인지하고 실천하지 못하는 데에는 복합적인 사회적, 심리적 요인이 작용합니다.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: "💰",
                  title: "사회경제적 불평등",
                  subtitle: "Economic & Physical Access",
                  content: "건강한 식재료는 종종 가공식품보다 비싸거나 접근성이 떨어집니다. 저소득층일수록 저렴하고 열량만 높은 '엠티 칼로리(Empty Calories)' 식품에 의존하게 되는 식품 사막(Food Desert) 현상이 발생합니다. 또한 바쁜 현대인에게 신선한 재료를 구입하고 조리할 '시간적 자원'의 부족은 큰 장벽이 됩니다.",
                  color: "border-primary/25 bg-primary/5",
                },
                {
                  icon: "📚",
                  title: "정보의 비대칭과 교육의 부재",
                  subtitle: "Nutritional Literacy",
                  content: "무엇이 좋은 음식인지 구별할 수 있는 영양 문해력의 차이가 큽니다. 상업적인 마케팅과 잘못된 건강 정보가 범람하는 환경에서, 과학적 근거에 기반한 올바른 식단 선택 능력을 갖추지 못한 경우 잘못된 식습관에 노출되기 쉽습니다.",
                  color: "border-emerald-200 bg-emerald-50",
                },
                {
                  icon: "🧠",
                  title: "심리적 기제와 습관의 관성",
                  subtitle: "Psychological Barriers",
                  content: "인간의 뇌는 즉각적인 보상(단맛, 짠맛, 지방의 풍미)을 선호하도록 진화했습니다. 건강에 나쁘다는 것을 알면서도 당장의 스트레스를 해소하기 위해 자극적인 음식을 찾는 인지 부조화와 오랜 기간 형성된 식습관의 관성은 변화를 가로막는 강력한 원인입니다.",
                  color: "border-primary/25 bg-primary/5",
                },
              ].map((item) => (
                <div key={item.title} className={`p-6 rounded-xl border-2 ${item.color}`}>
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h3 className="font-bold text-foreground">{item.title}</h3>
                      <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2-5 건강 회복의 여건과 조건 */}
        {activeSub === "recovery" && (
          <div>
            <div className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-5 border border-primary/20">건강 2-5</div>
            <h2 className="text-4xl font-bold text-foreground mb-3">건강을 회복하기 위한</h2>
            <p className="text-xl text-primary font-semibold mb-2">여건과 조건은 무엇인가?</p>
            <div className="w-16 h-1 bg-primary rounded mb-10" />

            <p className="text-muted-foreground mb-8 leading-relaxed">
              과거에 잘못된 식습관을 가졌더라도, 적절한 환경과 조건이 갖춰진다면 신체는 놀라운 회복력을 발휘합니다.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: "💡",
                  title: "인식의 전환과 동기 부여",
                  subtitle: "Awareness & Motivation",
                  content: "가장 먼저 필요한 것은 자신의 현재 상태에 대한 정확한 인식입니다. 단순히 '건강해지고 싶다'는 막연한 생각보다, 식단이 내 몸에 미치는 영향을 데이터로 확인하거나 전문가의 가이드를 통해 변화의 필요성을 절감하는 단계가 선행되어야 합니다.",
                  routinefit: "루틴핏은 매일의 기록을 시각화하여 내 몸의 변화를 데이터로 보여줍니다.",
                },
                {
                  icon: "🏗️",
                  title: "선택 설계와 환경의 변화",
                  subtitle: "Nudge & Environment",
                  content: "의지력만으로는 식습관을 바꾸기 어렵습니다. 건강한 음식을 더 쉽게 선택할 수 있도록 주변 환경을 재설계해야 합니다. 건강한 간식을 눈에 잘 띄는 곳에 배치하고, 가공식품 구매 경로를 차단하는 등 '선택의 구조'를 바꾸는 것이 중요합니다.",
                  routinefit: "루틴핏은 냉장고 재료 기반 건강 요리 추천으로 건강한 선택을 더 쉽게 만듭니다.",
                },
                {
                  icon: "🎯",
                  title: "개인 맞춤형 가이드와 점진적 습관 형성",
                  subtitle: "Personalization & Habit",
                  content: "모두에게 맞는 단 하나의 식단은 없습니다. 개인의 체질, 질병 유무, 생활 패턴에 맞춘 개별화된 영양 전략이 필요합니다. 한꺼번에 모든 것을 바꾸기보다 작은 성공(Small Wins)을 쌓아가는 점진적 습관 형성 프로세스가 뒷받침되어야 합니다.",
                  routinefit: "루틴핏 AI는 당신의 데이터를 분석해 오늘 당장 실천 가능한 작은 변화부터 제안합니다.",
                },
                {
                  icon: "🤝",
                  title: "지속적인 모니터링과 지지 체계",
                  subtitle: "Support System",
                  content: "식단 관리는 고독한 싸움이 될 수 있습니다. 데이터 기반 피드백으로 섭취 영양소와 신체 변화를 시각화하여 성취감을 고취하고, 실시간으로 올바른 선택을 돕는 AI 코칭이 필요합니다.",
                  routinefit: "루틴핏은 매일 당신 곁에서 격려하고, 잘못된 방향을 조기에 바로잡아 줍니다.",
                },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-xl border border-primary/20 shadow-sm bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h3 className="font-bold text-foreground">{item.title}</h3>
                      <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.content}</p>
                  <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-2">
                    <p className="text-xs font-bold text-primary">루틴핏의 역할</p>
                    <p className="text-sm text-foreground">{item.routinefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   3. 루틴핏 섹션
───────────────────────────────────────────────────────────────── */
function RoutinefitSection() {
  const [activeSub, setActiveSub] = useState("core");
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const subs = [
    { id: "core", label: "3-1  핵심기능" },
    { id: "flow", label: "3-2  기록흐름" },
    { id: "report", label: "3-3  보고서" },
    { id: "habit", label: "3-4  습관 만드는 도구" },
  ];

  const screenshots = [
    { image: "/manus-storage/Screenshot_20260511_164625_Chrome_c386ce72.jpg", title: "홈 대시보드", desc: "오늘의 건강 점수와 주요 지표를 한눈에 확인하세요" },
    { image: "/manus-storage/Screenshot_20260511_164634_Chrome_13b4a7ec.jpg", title: "음식 기록", desc: "사진 한 장으로 음식을 인식하고 영양 정보를 자동 분석" },
    { image: "/manus-storage/Screenshot_20260511_164704_Chrome_3abb6b2a.jpg", title: "건강 분석", desc: "AI가 분석한 건강 패턴과 개선 사항을 확인하세요" },
    { image: "/manus-storage/Screenshot_20260511_164714_Chrome_95c31bc8.jpg", title: "주간 리포트", desc: "건강 개선 추이를 시각화하고 AI 인사이트를 받아보세요" },
    { image: "/manus-storage/Screenshot_20260511_164721_Chrome_ccfffe04.jpg", title: "운동 추적", desc: "일일 활동량과 운동 기록을 자동으로 추적합니다" },
    { image: "/manus-storage/Screenshot_20260511_164745_Chrome_a33d91f5.jpg", title: "수면 관리", desc: "수면 패턴을 기록하고 개선 방법을 제안받으세요" },
    { image: "/manus-storage/Screenshot_20260511_164825_Chrome_1dac64da.jpg", title: "혈압 기록", desc: "일일 혈압 변화를 추적하고 건강 상태를 모니터링하세요" },
    { image: "/manus-storage/Screenshot_20260511_164838_Chrome_46f73b79.jpg", title: "맞춤 제안", desc: "AI가 당신의 건강 데이터를 분석해 개인화된 조언을 제공합니다" },
    { image: "/manus-storage/Screenshot_20260511_164852_Chrome_64b1ef79.jpg", title: "AI 채팅", desc: "언제든 AI 건강 어시스턴트와 상담하세요" },
    { image: "/manus-storage/Screenshot_20260511_164913_Chrome_a581e153.jpg", title: "설정 및 프로필", desc: "개인 건강 정보를 관리하고 앱 설정을 커스터마이즈하세요" },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-0 min-h-[600px]">
      <aside className="md:w-64 flex-shrink-0 bg-[#1A3A5C] text-white">
        <div className="p-6">
          <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">루틴핏</div>
          <nav className="space-y-1">
            {subs.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSub(s.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all ${
                  activeSub === s.id
                    ? "bg-primary text-white font-bold"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {s.label}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      <main className="flex-1 bg-white p-10 md:p-14 overflow-y-auto">

        {/* 3-1 핵심기능 */}
        {activeSub === "core" && (
          <div>
            <div className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-5 border border-primary/20">루틴핏 3-1</div>
            <h2 className="text-4xl font-bold text-foreground mb-3">핵심기능</h2>
            <div className="w-16 h-1 bg-primary rounded mb-10" />

            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              루틴핏은 복잡한 기능 대신, <strong>쉽게 기록하고 즉각 피드백을 받는 5가지 핵심 기능</strong>으로 구성됩니다.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { icon: <Zap className="w-8 h-8 text-primary" />, title: "3초 입력", desc: "사진 1장, 음성 10초, 텍스트 한 줄로 기록 완료. 입력 시간 90% 단축." },
                { icon: <TrendingUp className="w-8 h-8 text-primary" />, title: "AI 초개인화 분석", desc: "Claude Sonnet 기반 AI가 당신의 건강 데이터를 분석해 맞춤형 제안을 제공합니다." },
                { icon: <Heart className="w-8 h-8 text-primary" />, title: "즉각 피드백", desc: "기록 즉시 점수 표시 및 반응 제공. 행동 변화를 유도합니다." },
                { icon: <BookOpen className="w-8 h-8 text-primary" />, title: "AI 맞춤 요리 추천", desc: "냉장고 재료와 건강 상태를 분석해 오늘 나에게 최적인 요리를 추천합니다." },
                { icon: <Activity className="w-8 h-8 text-primary" />, title: "주간 건강 보고서", desc: "한 주간의 기록을 AI가 분석하여 패턴과 개선 방향을 리포트로 제공합니다." },
              ].map((f, i) => (
                <Card key={i} className="p-6 border border-primary/20 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <div className="mb-4">{f.icon}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-blue-50 rounded-xl p-6 border-l-4 border-primary">
              <h3 className="font-bold text-foreground mb-3">UX 설계 원칙</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {[
                  { num: "1", title: "3초 입력", desc: "빠르게" },
                  { num: "2", title: "즉각 피드백", desc: "바로 반응" },
                  { num: "3", title: "한 화면 한 행동", desc: "단순하게" },
                  { num: "4", title: "큰 글씨·버튼", desc: "50~60대 우선" },
                  { num: "5", title: "3일 기준", desc: "3일 이상 사용" },
                ].map((p) => (
                  <div key={p.num} className="text-center">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">{p.num}</div>
                    <p className="text-xs font-bold text-foreground">{p.title}</p>
                    <p className="text-xs text-muted-foreground">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 3-2 기록흐름 */}
        {activeSub === "flow" && (
          <div>
            <div className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-5 border border-primary/20">루틴핏 3-2</div>
            <h2 className="text-4xl font-bold text-foreground mb-3">기록흐름</h2>
            <p className="text-xl text-primary font-semibold mb-2">캘린더 타임테이블 기록 흐름</p>
            <div className="w-16 h-1 bg-primary rounded mb-10" />

            <p className="text-muted-foreground mb-8 leading-relaxed">
              루틴핏의 기록은 단순한 메모가 아닙니다. AI가 이해할 수 있는 구조화된 데이터로 자동 변환됩니다.
            </p>

            {/* 기록 흐름 다이어그램 */}
            <div className="space-y-3 mb-10">
              {[
                { step: "입력", icon: "💬", title: "말하거나 찍거나 쓰기", desc: "음성, 사진, 텍스트 중 편한 방식으로 오늘 있었던 일을 기록합니다.", color: "bg-primary/5 border-primary/25" },
                { step: "분류", icon: "🤖", title: "AI 자동 분류", desc: "AI가 입력 내용을 8가지 카테고리(먹기, 움직이기, 쉬기, 용변, 직장, 자기계발, 취미, 대인관계)로 자동 분류합니다.", color: "bg-emerald-50 border-emerald-200" },
                { step: "저장", icon: "📅", title: "타임라인 저장", desc: "분류된 기록이 시간 순서대로 타임라인에 저장됩니다. 캘린더에서 날짜별로 확인할 수 있습니다.", color: "bg-primary/5 border-primary/25" },
                { step: "분석", icon: "📊", title: "패턴 분석", desc: "축적된 데이터를 AI가 분석하여 건강 패턴, 인과관계, 개선 포인트를 도출합니다.", color: "bg-amber-50 border-amber-200" },
                { step: "피드백", icon: "💡", title: "맞춤 제안", desc: "분석 결과를 바탕으로 오늘 당장 실천할 수 있는 구체적인 제안을 제공합니다.", color: "bg-red-50 border-red-200" },
              ].map((item, i) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">{item.step}</div>
                    {i < 4 && <div className="w-px h-6 bg-primary/30 mt-1" />}
                  </div>
                  <div className={`flex-1 p-4 rounded-xl border-2 ${item.color}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{item.icon}</span>
                      <h3 className="font-bold text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
              <h3 className="font-bold text-foreground mb-3">🎯 정밀 기록의 중요성</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                기록이 정밀할수록 AI의 분석이 정확해집니다. 루틴핏은 입력 부담을 최소화하면서도
                AI가 필요로 하는 정보를 자동으로 추출합니다. 3일 이상 기록하면 AI가 당신의 패턴을 파악하기 시작합니다.
              </p>
            </div>

            {/* 앱 화면 슬라이더 */}
            <div className="mt-10">
              <h3 className="font-bold text-foreground mb-4">앱 화면 둘러보기</h3>
              <div className="relative bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
                <div className="relative h-[400px] flex items-center justify-center">
                  <img src={screenshots[currentScreenshot].image} alt={screenshots[currentScreenshot].title} className="h-full w-auto object-contain" />
                </div>
                <button onClick={() => setCurrentScreenshot((p) => (p - 1 + screenshots.length) % screenshots.length)} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={() => setCurrentScreenshot((p) => (p + 1) % screenshots.length)} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition">
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="bg-gradient-to-r from-primary to-blue-600 p-4 text-white">
                  <h4 className="font-bold">{screenshots[currentScreenshot].title}</h4>
                  <p className="text-sm opacity-90">{screenshots[currentScreenshot].desc}</p>
                </div>
              </div>
              <div className="flex justify-center gap-1.5 mt-4 flex-wrap">
                {screenshots.map((_, i) => (
                  <button key={i} onClick={() => setCurrentScreenshot(i)} className={`h-2 rounded-full transition-all ${i === currentScreenshot ? "bg-primary w-6" : "bg-border w-2 hover:bg-muted-foreground"}`} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 3-3 보고서 */}
        {activeSub === "report" && (
          <div>
            <div className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-5 border border-primary/20">루틴핏 3-3</div>
            <h2 className="text-4xl font-bold text-foreground mb-3">보고서</h2>
            <p className="text-xl text-primary font-semibold mb-2">보고서 체계</p>
            <div className="w-16 h-1 bg-primary rounded mb-10" />

            <p className="text-muted-foreground mb-8 leading-relaxed">
              루틴핏의 보고서는 단순한 통계가 아닙니다. AI가 당신의 데이터를 분석하여
              <strong> 인과관계와 개선 방향</strong>을 제시하는 맞춤형 건강 리포트입니다.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: "📅", title: "일간 보고서", desc: "오늘 하루의 식사, 운동, 수면, 복약 기록을 종합하여 건강 점수와 함께 내일을 위한 제안을 제공합니다.", badge: "매일" },
                { icon: "📊", title: "주간 보고서", desc: "7일간의 패턴을 분석하여 개선된 점과 주의가 필요한 부분을 시각화합니다. 다음 주 목표를 AI가 설정해 드립니다.", badge: "매주" },
                { icon: "📈", title: "월간 보고서", desc: "한 달간의 건강 추이를 그래프로 보여주고, 장기적인 변화 방향을 제안합니다.", badge: "매월" },
                { icon: "🎯", title: "목표 달성 보고서", desc: "설정한 건강 목표(체중 감량, 혈압 안정화 등)의 진행 상황을 추적하고 달성 예상 시점을 알려드립니다.", badge: "목표별" },
              ].map((item) => (
                <Card key={item.title} className="p-6 border-2 border-primary/10 hover:shadow-md transition">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl">{item.icon}</span>
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">{item.badge}</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </Card>
              ))}
            </div>

            <div className="bg-[#0F1B3D] text-white rounded-xl p-6">
              <h3 className="font-bold mb-4">루틴핏의 차별화된 경쟁력</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: "복제 불가 데이터 자산", desc: "사용자의 실제 행동·결과 데이터는 외부 수집 불가. 시간 기반 축적으로만 가능한 고유 자산입니다." },
                  { title: "행동-결과 인과 분석", desc: "단순 수치가 아닌 '식단 → 체중 변화' 같은 인과 데이터를 분석해 최적 전략을 제시합니다." },
                  { title: "한국 50~60대 특화 데이터", desc: "글로벌 빅테크도 보유하지 못한 한국 중장년층의 고유 건강 데이터입니다." },
                ].map((a) => (
                  <div key={a.title} className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold text-sm mb-2">{a.title}</h4>
                    <p className="text-xs text-white/70 leading-relaxed">{a.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 3-4 습관 만드는 도구 */}
        {activeSub === "habit" && (
          <div>
            <div className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-5 border border-primary/20">루틴핏 3-4</div>
            <h2 className="text-4xl font-bold text-foreground mb-3">습관 만드는 도구</h2>
            <p className="text-xl text-primary font-semibold mb-2">앱이 아닌 습관 형성 도구</p>
            <div className="w-16 h-1 bg-primary rounded mb-10" />

            <blockquote className="border-l-4 border-primary bg-primary/5 px-6 py-4 rounded-r-xl mb-8">
              <p className="text-lg font-bold text-foreground">
                "건강은 의지가 아니라 설계된 환경이 만듭니다"
              </p>
            </blockquote>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              루틴핏은 단순한 기록 앱이 아닙니다. 건강한 행동이 자연스럽게 반복되도록 환경을 설계하는 도구입니다.
            </p>

            <div className="space-y-5 mb-8">
              {[
                { icon: "🔔", title: "스마트 알림", desc: "복약 시간, 운동 타이밍, 식사 간격을 당신의 일상 패턴에 맞춰 알려드립니다. 강요가 아닌 자연스러운 유도입니다." },
                { icon: "🏆", title: "성취 시스템", desc: "작은 목표를 달성할 때마다 시각적 보상을 제공합니다. 3일 연속 기록, 일주일 복약 완료 등 작은 성공이 쌓입니다." },
                { icon: "📉", title: "이탈 방지 설계", desc: "기존 건강 앱의 2주 내 80% 이탈률을 극복하기 위해, 루틴핏은 입력 장벽을 최소화하고 즉각적인 가치를 제공합니다." },
                { icon: "🔄", title: "습관 루프 설계", desc: "신호(알림) → 행동(기록) → 보상(피드백)의 습관 루프를 반복하여 건강 행동이 자동화되도록 설계합니다." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 bg-white border border-primary/20 shadow-sm rounded-xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <span className="text-3xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-4 bg-primary/5 border border-primary/15 rounded-xl p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">3초</div>
                <p className="text-sm text-muted-foreground">최소 입력 시간</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">3일</div>
                <p className="text-sm text-muted-foreground">AI 패턴 파악 시작</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">21일</div>
                <p className="text-sm text-muted-foreground">습관 형성 목표</p>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   4. 개인맞춤 건강관리 섹션
───────────────────────────────────────────────────────────────── */
function PersonalizationSection() {
  const [activeScenario, setActiveScenario] = useState<number | null>(null);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const scenarios = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      num: "01", title: "만성질환 관리", subtitle: "고혈압·당뇨",
      color: "from-red-500 to-rose-600", bgLight: "bg-red-50", borderColor: "border-red-200",
      need: "매일 약 먹는 것을 깜빡하고, 식단이 혈당·혈압에 어떤 영향을 미치는지 파악하기 어렵습니다.",
      solution: "식사 기록 분석으로 혈당 스파이크 경고, 복약 알림, 저염·저당 대체 식재료를 구체적으로 추천합니다.",
      videoId: null,
    },
    {
      icon: <Activity className="w-6 h-6" />,
      num: "02", title: "두피·모발 케어", subtitle: "탈모·두피 루틴",
      color: "from-amber-500 to-orange-500", bgLight: "bg-amber-50", borderColor: "border-amber-200",
      need: "비싼 탈모 샴푸를 써도 효과가 없고, 스트레스 받은 날 머리카락이 더 빠지는 것 같아 불안합니다.",
      solution: "스트레스 지수와 수면 패턴을 탈모 증상과 교차 분석하고, 비오틴·단백질 섭취량을 모니터링합니다.",
      videoId: null,
    },
    {
      icon: <Moon className="w-6 h-6" />,
      num: "03", title: "수면·피로 회복", subtitle: "수면장애·만성피로",
      color: "from-indigo-500 to-violet-600", bgLight: "bg-indigo-50", borderColor: "border-indigo-200",
      need: "충분히 잤는데도 아침에 개운하지 않고, 오후 3시면 극심한 피로감이 옵니다.",
      solution: "카페인 섭취 시간과 수면의 질을 분석해 최적 타이밍을 가이드하고, 비타민B·마그네슘 식단을 추천합니다.",
      videoId: null,
    },
    {
      icon: <Scale className="w-6 h-6" />,
      num: "04", title: "체중·체형 관리", subtitle: "다이어트·감량",
      color: "from-emerald-500 to-teal-600", bgLight: "bg-emerald-50", borderColor: "border-emerald-200",
      need: "극단적 다이어트에 지쳐 있고, 불규칙한 생활 패턴에 맞는 지속 가능한 감량 방법을 찾고 싶습니다.",
      solution: "다량영양소 비율을 정밀 분석하고, 여성은 생리 주기와 연동해 체중 정체기를 예측·멘탈 케어합니다.",
      videoId: null,
    },
    {
      icon: <Bone className="w-6 h-6" />,
      num: "05", title: "근골격계 관리", subtitle: "관절염·통증",
      color: "from-cyan-500 to-blue-600", bgLight: "bg-cyan-50", borderColor: "border-cyan-200",
      need: "비 오는 날이나 무리한 날 무릎·허리 통증이 심해지고, 운동을 쉬어야 할지 해야 할지 판단이 어렵습니다.",
      solution: "기상 데이터와 활동량·통증 기록을 연동해 통증 악화일을 사전 경고하고, 저강도 맞춤 운동을 제안합니다.",
      videoId: null,
    },
    {
      icon: <Brain className="w-6 h-6" />,
      num: "06", title: "정신건강 관리", subtitle: "우울·불안장애",
      color: "from-purple-500 to-fuchsia-600", bgLight: "bg-purple-50", borderColor: "border-purple-200",
      need: "감정 기복이 심하지만 원인을 모르고, 병원 상담 전 심리 상태를 객관적 데이터로 확인하고 싶습니다.",
      solution: "수면 부족·당류 과다 섭취가 감정에 미치는 영향을 리포트로 제공하고, 불안 패턴 감지 시 호흡 명상을 안내합니다.",
      videoId: null,
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      num: "07", title: "내분비계 관리", subtitle: "갑상선·호르몬 불균형",
      color: "from-pink-500 to-rose-500", bgLight: "bg-pink-50", borderColor: "border-pink-200",
      need: "식사량이 늘지 않았는데 체중이 증가하고, 이게 약 때문인지 생활 습관 때문인지 구분하고 싶습니다.",
      solution: "약 복용 시간과 피로감의 상관관계를 그래프로 분석하고, 요오드 섭취량 모니터링과 생체 리듬 가이드를 제공합니다.",
      videoId: null,
    },
    {
      icon: <Apple className="w-6 h-6" />,
      num: "08", title: "소화기계 관리", subtitle: "소화기 질환·장 건강",
      color: "from-green-500 to-emerald-600", bgLight: "bg-green-50", borderColor: "border-green-200",
      need: "식사 후 자주 체하거나 가스가 차고, 어떤 식재료가 내 장에 맞지 않는지 과학적으로 찾고 싶습니다.",
      solution: "식사 기록과 소화 불량 증상을 FODMAP 데이터와 교차 분석해 개인별 트리거 음식을 도출합니다.",
      videoId: null,
    },
    {
      icon: <Dumbbell className="w-6 h-6" />,
      num: "09", title: "재활·회복 관리", subtitle: "운동 재활·부상 회복",
      color: "from-orange-500 to-amber-600", bgLight: "bg-orange-50", borderColor: "border-orange-200",
      need: "수술·부상 후 회복 중이며, 어느 정도 강도로 움직여야 관절에 무리가 가지 않는지 항상 불안합니다.",
      solution: "아연·고품질 단백질 위주 식단을 매일 추천하고, 점진적 과부하 원칙에 따른 주차별 안전 활동량 목표를 설정합니다.",
      videoId: null,
    },
    {
      icon: <Baby className="w-6 h-6" />,
      num: "10", title: "가족·돌봄 관리", subtitle: "가족 건강 통합",
      color: "from-teal-500 to-cyan-600", bgLight: "bg-teal-50", borderColor: "border-teal-200",
      need: "멀리 사는 고령 부모님이 식사와 복약을 잘 챙기시는지 항상 걱정하며 확인하고 싶습니다.",
      solution: "부모님 앱 사용 기록을 바탕으로 보호자에게 주간 요약 리포트를 자동 발송하고, 누락 시 즉시 알림을 보냅니다.",
      videoId: null,
    },
  ];

  return (
    <div className="bg-white">
      {/* 섹션 헤더 */}
      <div className="bg-gradient-to-br from-emerald-900 to-primary text-white px-10 py-14 md:px-14">
        <div className="inline-block text-xs font-bold text-white/70 bg-white/20 px-3 py-1 rounded-full mb-3">AI 맞춤형 솔루션</div>
        <h2 className="text-4xl font-bold mb-4">개인맞춤 건강관리</h2>
        <p className="text-white/80 text-lg max-w-2xl">
          루틴핏의 AI는 당신의 구체적인 상황을 이해하고, 실질적인 건강 변화를 설계합니다.
          10가지 상황 중 나에게 해당하는 것을 선택하세요.
        </p>
      </div>

      {/* 카드 그리드 */}
      <div className="p-10 md:p-14">
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {scenarios.map((s, idx) => (
            <div key={s.num} className={`rounded-xl border-2 ${s.borderColor} overflow-hidden transition-all duration-300`}>
              {/* 카드 헤더 (항상 표시) */}
              <button
                onClick={() => setActiveScenario(activeScenario === idx ? null : idx)}
                className={`w-full bg-gradient-to-r ${s.color} p-4 text-white flex items-center justify-between`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    {s.icon}
                  </div>
                  <div className="text-left">
                    <div className="text-xs opacity-70">상황 {s.num}</div>
                    <div className="font-bold">{s.title}</div>
                    <div className="text-xs opacity-80">{s.subtitle}</div>
                  </div>
                </div>
                {activeScenario === idx ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>

              {/* 펼쳐지는 상세 내용 */}
              {activeScenario === idx && (
                <div className={`p-5 ${s.bgLight}`}>
                  <div className="mb-4">
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">사용자 니즈</div>
                    <p className="text-sm text-foreground leading-relaxed">{s.need}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-white shadow-sm mb-4">
                    <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 루틴핏 AI 솔루션
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">{s.solution}</p>
                  </div>

                  {/* 동영상 영역 */}
                  <div className="rounded-lg overflow-hidden border-2 border-white/50">
                    {s.videoId ? (
                      <div className="relative aspect-video bg-black">
                        {playingVideo === `${s.num}` ? (
                          <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${s.videoId}?autoplay=1&rel=0`}
                            title={s.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          <button
                            onClick={() => setPlayingVideo(`${s.num}`)}
                            className="w-full h-full flex items-center justify-center bg-black/80 text-white"
                          >
                            <div className="text-center">
                              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-2 shadow-xl">
                                <Play className="w-6 h-6 ml-1" fill="currentColor" />
                              </div>
                              <p className="text-sm font-medium">{s.title} 영상 보기</p>
                            </div>
                          </button>
                        )}
                      </div>
                    ) : (
                      <div className="aspect-video bg-gray-100 flex items-center justify-center">
                        <div className="text-center text-muted-foreground">
                          <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Play className="w-6 h-6 text-gray-400" />
                          </div>
                          <p className="text-sm font-medium">영상 준비 중</p>
                          <p className="text-xs mt-1">YouTube 링크 연결 후 활성화됩니다</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   5. 사용설명서 섹션
───────────────────────────────────────────────────────────────── */
function GuideSection() {
  return (
    <div className="bg-white">
      {/* 헤더 */}
      <div className="bg-[#0F1B3D] text-white px-10 py-14 md:px-14">
        <div className="inline-block text-xs font-bold text-white/70 bg-white/20 px-3 py-1 rounded-full mb-3">사용설명서</div>
        <h2 className="text-4xl font-bold mb-4">루틴핏 사용설명서</h2>
        <p className="text-white/80 text-lg max-w-2xl">
          루틴핏을 처음 시작하시나요? 3분이면 첫 기록까지 완료됩니다.
        </p>
      </div>

      <div className="p-10 md:p-14">
        {/* 빠른 시작 카드 */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            { num: "1", icon: "👤", title: "프로필 입력", desc: "이름, 나이, 키, 몸무게를 입력하세요. 복약 중인 약이 있다면 함께 적어두면 AI가 더 잘 이해합니다.", time: "약 1분" },
            { num: "2", icon: "📋", title: "건강 설문 작성", desc: "식습관, 운동, 수면, 복약, 건강 목표 등을 답하세요. AI가 나에게 맞는 방식으로 도움을 드리기 위한 준비입니다.", time: "약 5분" },
            { num: "3", icon: "💬", title: "첫 기록 남기기", desc: "대화 탭에서 오늘 먹은 것, 한 운동, 복약 여부를 편하게 말해보세요. AI가 자동으로 기록합니다.", time: "30초" },
          ].map((step) => (
            <Card key={step.num} className="p-6 border border-primary/20 shadow-sm hover:border-primary/40 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-3">{step.num}</div>
              <div className="text-lg font-bold mb-2">{step.icon} {step.title}</div>
              <p className="text-sm text-muted-foreground mb-3">{step.desc}</p>
              <span className="text-xs bg-green-100 text-primary px-2 py-1 rounded-full font-medium">{step.time}</span>
            </Card>
          ))}
        </div>

        {/* 전체 사용설명서 링크 */}
        <div className="bg-gradient-to-r from-primary/5 to-blue-50 rounded-2xl p-8 border-2 border-primary/20 text-center mb-10">
          <div className="text-4xl mb-4">📖</div>
          <h3 className="text-2xl font-bold text-foreground mb-3">전체 사용설명서 보기</h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            앱 설치 방법, 5개 탭 기능 안내, 8가지 기록 카테고리, 자주 묻는 질문까지 — 루틴핏의 모든 기능을 상세히 안내합니다.
          </p>
          <a
            href="https://minerba1.github.io/routinefit-guide/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition shadow-lg hover:shadow-xl"
          >
            사용설명서 열기 <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        {/* FAQ */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-6">자주 묻는 질문</h3>
          <div className="space-y-3 max-w-3xl">
            {[
              { q: "루틴핏은 정말 무료인가요?", a: "네, 기본 기능은 완전히 무료입니다. 개인화 분석과 전문 코칭 등 프리미엄 기능은 유료 구독으로 이용할 수 있습니다." },
              { q: "내 건강 데이터는 안전한가요?", a: "모든 데이터는 암호화되어 안전하게 저장됩니다. 개인정보보호법을 완벽히 준수하며, 당신의 데이터는 당신의 것입니다." },
              { q: "60대도 쉽게 사용할 수 있나요?", a: "네, 루틴핏은 50~60대 사용자를 위해 특별히 설계되었습니다. 큰 글씨, 큰 버튼, 단순한 흐름으로 모든 연령대가 쉽게 사용할 수 있습니다." },
              { q: "AI 분석은 의료 조언을 대체할 수 있나요?", a: "아니요, 루틴핏은 의료 전문가를 대체하지 않습니다. 건강 관리를 위한 보조 도구이며, 중요한 건강 결정은 항상 의료 전문가와 상담하세요." },
              { q: "음성 입력이 작동하지 않아요", a: "마이크 권한이 허용되어 있는지 확인해 주세요. 스마트폰 설정 → 앱 권한 → 마이크에서 루틴핏(또는 브라우저)의 마이크 접근을 허용해 주세요." },
              { q: "기기를 바꿨는데 기록이 사라졌어요", a: "루틴핏의 데이터는 기기 안에 저장됩니다. 기기를 바꾸기 전에 설정 탭 → '데이터 내보내기'로 백업 파일을 저장해 두세요." },
            ].map((faq, i) => (
              <Card key={i} className="p-5 border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <h4 className="font-bold text-foreground mb-2 flex items-start gap-2">
                  <span className="text-primary font-bold flex-shrink-0">Q.</span>
                  {faq.q}
                </h4>
                <p className="text-sm text-muted-foreground ml-6">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   메인 홈 컴포넌트
───────────────────────────────────────────────────────────────── */
export default function Home() {
  const [activeTab, setActiveTab] = useState<MainTab | null>(null);
  const tabPanelRef = useRef<HTMLDivElement>(null);

  const tabs: { id: MainTab; label: string; emoji: string; desc: string }[] = [
    { id: "philosophy", label: "개발철학", emoji: "💡", desc: "왜 루틴핏인가" },
    { id: "health", label: "건강", emoji: "🌿", desc: "건강의 본질" },
    { id: "routinefit", label: "루틴핏", emoji: "📱", desc: "앱 소개" },
    { id: "personalization", label: "개인맞춤 건강관리", emoji: "🎯", desc: "10가지 솔루션" },
    { id: "guide", label: "사용설명서", emoji: "📖", desc: "시작하기" },
  ];

  const handleTabClick = (tabId: MainTab) => {
    const isClosing = activeTab === tabId;
    setActiveTab(isClosing ? null : tabId);
    if (!isClosing) {
      setTimeout(() => {
        tabPanelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ── Navigation ── */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container flex items-center justify-between py-4">
          {/* 로고 */}
          <button
            onClick={() => setActiveTab(null)}
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="font-bold text-xl text-foreground">루틴핏</span>
          </button>

          {/* 5대 탭 메뉴 */}
          <div className="hidden md:flex items-center gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-md ring-2 ring-primary/30"
                    : "text-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 앱 다운로드 버튼 */}
          <Button className="bg-primary hover:bg-primary/90">앱 다운로드</Button>
        </div>

        {/* 모바일 탭 메뉴 */}
        <div className="md:hidden flex overflow-x-auto gap-1 px-4 pb-3 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`flex-shrink-0 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-white ring-2 ring-primary/30"
                  : "text-foreground bg-secondary hover:bg-primary/10"
              }`}
            >
              {tab.emoji} {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ── 탭 콘텐츠 패널 ── */}
      {activeTab && (
        <div ref={tabPanelRef} className="border-b border-border shadow-lg">
          {/* 탭 헤더 바 */}
          <div className="bg-secondary/40 px-6 py-3 flex items-center justify-between border-b border-border/50">
            <div className="flex items-center gap-3 text-sm">
              <span className="text-xl">{tabs.find(t => t.id === activeTab)?.emoji}</span>
              <span className="font-bold text-foreground text-base">
                {tabs.find(t => t.id === activeTab)?.label}
              </span>
              <span className="text-muted-foreground hidden sm:inline">—</span>
              <span className="text-muted-foreground hidden sm:inline">{tabs.find(t => t.id === activeTab)?.desc}</span>
            </div>
            <button
              onClick={() => setActiveTab(null)}
              className="w-9 h-9 rounded-full bg-white border border-border flex items-center justify-center hover:bg-red-50 hover:border-red-300 transition-all shadow-sm"
              aria-label="닫기"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          {/* 탭별 콘텐츠 */}
          <div className="max-h-[80vh] overflow-y-auto">
            {activeTab === "philosophy" && <PhilosophySection />}
            {activeTab === "health" && <HealthSection />}
            {activeTab === "routinefit" && <RoutinefitSection />}
            {activeTab === "personalization" && <PersonalizationSection />}
            {activeTab === "guide" && <GuideSection />}
          </div>
        </div>
      )}

      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white py-24 md:py-36">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-6 border border-primary/20">
                AI 기반 개인 맞춤 건강관리
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
                당신만을 위한<br />
                <span className="text-primary">AI 건강 주치의</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                복잡한 건강 관리는 이제 그만. 루틴핏이 당신의 개인 맞춤형 건강 솔루션을 제공합니다.
                사진, 음성, 텍스트로 3초 만에 기록하고, AI 분석을 통해 실질적인 건강 변화를 경험하세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  지금 시작하기 <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => handleTabClick("philosophy")}
                  className="flex items-center gap-2"
                >
                  💡 개발철학 보기
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
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

      {/* ── 5대 목차 탐색 카드 ── */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">루틴핏을 더 깊이 알아보세요</h2>
            <p className="text-muted-foreground">각 항목을 클릭하면 상세 내용을 확인할 수 있습니다</p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`p-6 rounded-2xl border-2 text-left transition-all hover:shadow-lg hover:-translate-y-0.5 group ${
                  activeTab === tab.id
                    ? "border-primary bg-primary text-white shadow-lg"
                    : "border-border bg-white hover:border-primary/40"
                }`}
              >
                <div className="text-3xl mb-3">{tab.emoji}</div>
                <div className={`font-bold mb-1 ${activeTab === tab.id ? "text-white" : "text-foreground"}`}>
                  {tab.label}
                </div>
                <div className={`text-xs ${activeTab === tab.id ? "text-white/80" : "text-muted-foreground"}`}>
                  {tab.desc}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── 건강의 4대 요소 이미지 ── */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-foreground mb-5">건강의 4대 요소</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">루틴핏은 건강을 4가지 핵심 요소로 정의하고 통합 관리합니다.</p>
          </div>
          <div className="relative mb-8">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663607358559/7unLf8XtsqoDAFGSxfpHx2/health-4-elements-korean-4sbv6UD9B38MUNjULsi4fU.webp"
              alt="건강의 4대 요소"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
          <div className="text-center">
            <button
              onClick={() => handleTabClick("health")}
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              건강에 대해 더 알아보기 <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── 문제와 해결책 ── */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-foreground mb-5">건강 관리, 왜 어려울까요?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">기존 건강 앱의 한계를 루틴핏이 해결합니다.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground mb-6">기존 앱의 한계</h3>
              {["복잡한 수동 입력으로 기록 부담이 높음", "단순 통계만 제공하고 개인화 없음", "일반적인 조언만 반복됨", "2주 내 80% 이탈률"].map((p, i) => (
                <div key={i} className="flex gap-3 p-4 bg-white rounded-lg border border-border">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-sm">✕</span>
                  </div>
                  <p className="text-foreground">{p}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary mb-6">루틴핏의 해결책</h3>
              {["사진·음성·텍스트로 3초 만에 자동 기록", "AI가 패턴을 분석해 인과관계 도출", "개인 건강 데이터 기반 맞춤형 추천", "즉각 피드백으로 습관 형성"].map((s, i) => (
                <div key={i} className="flex gap-3 p-4 bg-white rounded-lg border border-primary/20">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-foreground">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 10가지 맞춤형 솔루션 미리보기 ── */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <div className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full mb-5 border border-primary/20">AI 맞춤형 솔루션</div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              당신의 상황에 맞는<br />
              <span className="text-primary">10가지 건강 솔루션</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              만성질환부터 가족 돌봄까지, 루틴핏 AI가 당신의 구체적인 상황을 이해합니다.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
            {[
              { icon: <Stethoscope className="w-5 h-5" />, title: "만성질환", color: "bg-red-100 text-red-600" },
              { icon: <Activity className="w-5 h-5" />, title: "두피·모발", color: "bg-amber-100 text-amber-600" },
              { icon: <Moon className="w-5 h-5" />, title: "수면·피로", color: "bg-indigo-100 text-indigo-600" },
              { icon: <Scale className="w-5 h-5" />, title: "체중·체형", color: "bg-emerald-100 text-emerald-600" },
              { icon: <Bone className="w-5 h-5" />, title: "근골격계", color: "bg-cyan-100 text-cyan-600" },
              { icon: <Brain className="w-5 h-5" />, title: "정신건강", color: "bg-purple-100 text-purple-600" },
              { icon: <Thermometer className="w-5 h-5" />, title: "내분비계", color: "bg-pink-100 text-pink-600" },
              { icon: <Apple className="w-5 h-5" />, title: "소화기계", color: "bg-green-100 text-green-600" },
              { icon: <Dumbbell className="w-5 h-5" />, title: "재활·회복", color: "bg-orange-100 text-orange-600" },
              { icon: <Baby className="w-5 h-5" />, title: "가족·돌봄", color: "bg-teal-100 text-teal-600" },
            ].map((item) => (
              <button
                key={item.title}
                onClick={() => handleTabClick("personalization")}
                className={`p-5 rounded-xl ${item.color} flex flex-col items-center gap-2.5 hover:opacity-80 hover:-translate-y-0.5 transition-all duration-150 font-medium text-sm shadow-sm`}
              >
                {item.icon}
                {item.title}
              </button>
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={() => handleTabClick("personalization")}
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition"
            >
              나에게 맞는 솔루션 찾기 <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 bg-gradient-to-br from-emerald-900 to-emerald-700 text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-7">지금 바로 시작하세요</h2>
          <p className="text-lg mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
            루틴핏과 함께 당신의 건강 여정을 시작하세요. 무료로 시작하고, 언제든지 업그레이드할 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              앱 다운로드 <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => handleTabClick("guide")}
            >
              <BookOpen className="mr-2 w-5 h-5" /> 사용설명서 보기
            </Button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
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
              <p className="text-xs opacity-50 mt-2">"한 명에게 꼭 필요한 맞춤 앱을 만들어준다"</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">탐색</h4>
              <ul className="space-y-2 text-sm opacity-70">
                {tabs.map((tab) => (
                  <li key={tab.id}>
                    <button onClick={() => handleTabClick(tab.id)} className="hover:opacity-100 transition text-left">
                      {tab.emoji} {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">도움말</h4>
              <ul className="space-y-2 text-sm opacity-70">
                <li>
                  <a href="https://minerba1.github.io/routinefit-guide/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition flex items-center gap-1">
                    사용설명서 <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li><button onClick={() => handleTabClick("guide")} className="hover:opacity-100 transition">FAQ</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">법률</h4>
              <ul className="space-y-2 text-sm opacity-70">
                <li><a href="#" className="hover:opacity-100 transition">개인정보처리방침</a></li>
                <li><a href="#" className="hover:opacity-100 transition">이용약관</a></li>
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

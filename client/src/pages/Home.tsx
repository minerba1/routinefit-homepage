import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight, CheckCircle2, Zap, Heart, TrendingUp, Users,
  ChevronLeft, ChevronRight, BookOpen, X, Play,
  Activity, Moon, Scale, Bone, Brain, Thermometer,
  Stethoscope, Apple, Dumbbell, Baby
} from "lucide-react";
import { useState } from "react";

/**
 * RoutineFit Homepage - Korean Version (v2 - Major Update)
 * Updates:
 *  - 사용설명서 모달 (네비게이션 메뉴 + 전체화면 팝업)
 *  - 홍보영상 4개 섹션 추가
 *  - 맞춤형 섹션 → 10가지 상황으로 전면 재구성
 */

/* ─────────────────────────────────────────
   사용설명서 모달 컴포넌트
───────────────────────────────────────── */
function GuideModal({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState("chat");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const chapters = [
    { id: "start",      icon: "🚀", label: "시작하기" },
    { id: "install",    icon: "📱", label: "앱 설치" },
    { id: "features",   icon: "⚙️", label: "5개 탭 기능" },
    { id: "categories", icon: "📂", label: "8가지 카테고리" },
    { id: "faq",        icon: "❓", label: "자주 묻는 질문" },
  ];
  const [activeChapter, setActiveChapter] = useState("start");

  const faqs = [
    { q: "🎤 음성 입력이 작동하지 않아요", a: "마이크 권한이 허용되어 있는지 확인해 주세요. 스마트폰 설정 → 앱 권한 → 마이크에서 루틴핏(또는 브라우저)의 마이크 접근을 허용해 주세요. 아이폰의 경우 Safari에서만 음성 입력이 지원됩니다." },
    { q: "📅 기록했는데 타임라인에 안 보여요", a: "대화 탭에서 AI가 응답을 완료한 후 기록이 저장됩니다. 응답이 끝나기 전에 탭을 이동하면 저장이 안 될 수 있습니다. 타임라인은 오늘 날짜가 기본으로 표시되니 날짜를 확인해 주세요." },
    { q: "📊 보고서가 생성되지 않아요", a: "보고서 생성에는 인터넷 연결이 필요합니다. 기록이 충분히 쌓여야 의미 있는 보고서가 만들어집니다. 최소 3일 이상 기록 후 시도해 보세요." },
    { q: "📱 기기를 바꿨는데 기록이 사라졌어요", a: "루틴핏의 데이터는 기기 안에 저장됩니다. 기기를 바꾸기 전에 설정 탭 → '데이터 내보내기'로 백업 파일을 저장해 두세요. 새 기기에서 '데이터 불러오기'로 복원할 수 있습니다." },
    { q: "🔄 앱을 처음부터 다시 시작하고 싶어요", a: "설정 탭 → '모든 데이터 삭제'를 누르면 프로필, 대화, 기록이 모두 초기화됩니다. 삭제 전에 반드시 '데이터 내보내기'로 백업을 해두세요." },
    { q: "💡 건강 설문은 꼭 다 작성해야 하나요?", a: "필수는 아닙니다. 설문 없이도 기본 기능은 모두 사용할 수 있습니다. 다만 설문을 작성할수록 AI가 나의 상태와 목표를 더 잘 이해해서 더 정확한 분석과 조언을 드릴 수 있습니다." },
    { q: "🍱 음식 사진 분석은 어떻게 하나요?", a: "대화 탭에서 카메라(📷) 버튼을 눌러 음식 사진을 찍거나 앨범에서 선택하세요. AI가 사진을 분석해 음식명, 칼로리, 주요 영양소를 알려드리고 자동으로 기록합니다." },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* 오버레이 */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* 모달 창 */}
      <div className="relative w-full max-w-6xl h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">

        {/* ── 모달 헤더 ── */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0F1B3D] text-white flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
              <span className="font-bold text-white text-base">R</span>
            </div>
            <div>
              <div className="font-bold text-lg leading-tight">루틴핏 사용설명서</div>
              <div className="text-xs text-white/60">RoutineFit User Guide v1.0</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ── 본문 (사이드바 + 콘텐츠) ── */}
        <div className="flex flex-1 overflow-hidden">

          {/* 좌측 목차 사이드바 */}
          <aside className="w-52 flex-shrink-0 bg-[#F4F7FB] border-r border-border overflow-y-auto">
            <div className="p-4">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3 px-2">목차</p>
              <nav className="space-y-1">
                {chapters.map((ch) => (
                  <button
                    key={ch.id}
                    onClick={() => setActiveChapter(ch.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition flex items-center gap-2 ${
                      activeChapter === ch.id
                        ? "bg-primary/10 text-primary font-bold border-l-4 border-primary pl-2"
                        : "text-foreground hover:bg-white hover:shadow-sm"
                    }`}
                  >
                    <span>{ch.icon}</span>
                    <span>{ch.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* 우측 콘텐츠 */}
          <main className="flex-1 overflow-y-auto p-6 md:p-8">

            {/* ── 시작하기 ── */}
            {activeChapter === "start" && (
              <div>
                <div className="inline-block text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">처음 시작하기</div>
                <h2 className="text-2xl font-bold text-foreground mb-1">딱 3단계면 됩니다</h2>
                <div className="w-16 h-1 bg-primary rounded mb-4" />
                <p className="text-muted-foreground mb-8">복잡한 설정 없이, 3단계만 따라오시면 첫 기록까지 완료됩니다.</p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {[
                    { num: "1", icon: "👤", title: "프로필 입력", desc: "이름, 나이, 키, 몸무게를 입력하세요. 복약 중인 약이 있다면 함께 적어두면 AI가 더 잘 이해합니다.", time: "약 1분" },
                    { num: "2", icon: "📋", title: "건강 설문 작성", desc: "식습관, 운동, 수면, 복약, 건강 목표 등을 답하세요. AI가 나에게 맞는 방식으로 도움을 드리기 위한 준비입니다.", time: "약 5분" },
                    { num: "3", icon: "💬", title: "첫 기록 남기기", desc: "대화 탭에서 오늘 먹은 것, 한 운동, 복약 여부를 편하게 말해보세요. AI가 자동으로 기록합니다.", time: "30초" },
                  ].map((step) => (
                    <Card key={step.num} className="p-5 border-2 border-primary/10 hover:border-primary/30 transition">
                      <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-3">{step.num}</div>
                      <div className="text-lg font-bold mb-2">{step.icon} {step.title}</div>
                      <p className="text-sm text-muted-foreground mb-3">{step.desc}</p>
                      <span className="text-xs bg-green-100 text-primary px-2 py-1 rounded-full font-medium">{step.time}</span>
                    </Card>
                  ))}
                </div>

                <div className="bg-green-50 border-l-4 border-primary rounded-lg p-4 flex gap-3">
                  <span className="text-2xl">🎯</span>
                  <p className="text-sm text-foreground">설문을 건너뛰고 싶다면 <strong>"데모 모드"</strong>로 먼저 앱을 체험해볼 수 있습니다. 나중에 언제든 설문을 작성하면 AI가 더 정확해집니다.</p>
                </div>
              </div>
            )}

            {/* ── 앱 설치 ── */}
            {activeChapter === "install" && (
              <div>
                <div className="inline-block text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">앱 설치</div>
                <h2 className="text-2xl font-bold text-foreground mb-1">앱스토어 없이 바로 설치할 수 있어요</h2>
                <div className="w-16 h-1 bg-primary rounded mb-4" />
                <p className="text-muted-foreground mb-8">루틴핏은 웹 기반 앱(PWA)입니다. 앱스토어 없이 스마트폰 홈 화면에 바로 추가할 수 있습니다.</p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {[
                    {
                      icon: "🍎", title: "아이폰 (Safari)",
                      steps: ["Safari로 루틴핏 주소를 엽니다", "하단 공유 버튼(□↑)을 누릅니다", '"홈 화면에 추가"를 선택합니다', '오른쪽 위 "추가"를 누릅니다']
                    },
                    {
                      icon: "🤖", title: "안드로이드 (Chrome)",
                      steps: ["Chrome으로 루틴핏 주소를 엽니다", "오른쪽 위 메뉴(⋮)를 누릅니다", '"홈 화면에 추가"를 선택합니다', '"추가"를 누릅니다']
                    },
                  ].map((item) => (
                    <Card key={item.title} className="p-5 border-2 border-primary/10">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="font-bold text-foreground">{item.title}</span>
                      </div>
                      <ol className="space-y-2">
                        {item.steps.map((s, i) => (
                          <li key={i} className="flex gap-3 text-sm">
                            <span className="w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{i+1}</span>
                            <span className="text-foreground">{s}</span>
                          </li>
                        ))}
                      </ol>
                    </Card>
                  ))}
                </div>

                <div className="bg-blue-50 border-l-4 border-accent rounded-lg p-4 flex gap-3">
                  <span className="text-2xl">📱</span>
                  <p className="text-sm text-foreground">설치 후에는 일반 앱처럼 홈 화면에서 바로 실행할 수 있습니다. 인터넷 연결만 있으면 언제든 사용 가능합니다.</p>
                </div>
              </div>
            )}

            {/* ── 5개 탭 기능 ── */}
            {activeChapter === "features" && (
              <div>
                <div className="inline-block text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">기능 안내</div>
                <h2 className="text-2xl font-bold text-foreground mb-1">5개 탭, 이렇게 사용하세요</h2>
                <div className="w-16 h-1 bg-primary rounded mb-4" />
                <p className="text-muted-foreground mb-6">루틴핏은 5개의 탭으로 구성되어 있습니다.</p>

                {/* 탭 버튼 */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    { id: "chat", label: "💬 대화 (기록)" },
                    { id: "timeline", label: "📅 일정" },
                    { id: "report", label: "📊 보고서" },
                    { id: "profile", label: "👤 프로필" },
                    { id: "settings", label: "⚙️ 설정" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                        activeTab === tab.id
                          ? "bg-primary text-white"
                          : "bg-secondary text-foreground hover:bg-primary/10"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {activeTab === "chat" && (
                  <Card className="p-6 border-2 border-primary/20">
                    <h3 className="text-lg font-bold mb-1">💬 대화 탭 — 건강 기록의 시작</h3>
                    <p className="text-sm text-muted-foreground mb-4">가장 많이 사용하게 될 핵심 탭입니다</p>
                    <p className="text-foreground mb-5">AI 코치에게 오늘 있었던 일을 편하게 말하면, 자동으로 분류되어 타임라인에 저장됩니다.</p>
                    <div className="grid md:grid-cols-3 gap-3 mb-5">
                      {[
                        { icon: "🎤", title: "음성으로 말하기", desc: "마이크 버튼을 누르고 편하게 말하세요", ex: '"아침에 혈압약 먹었어"' },
                        { icon: "📷", title: "사진 찍기", desc: "음식 사진 한 장이면 영양소 분석 완료", ex: "식판 사진 → 칼로리·영양소 자동 분석" },
                        { icon: "⌨️", title: "텍스트 입력", desc: "직접 타이핑해도 됩니다", ex: '"저녁 산책 20분, 혈당 105"' },
                      ].map((m) => (
                        <div key={m.title} className="bg-secondary/30 rounded-lg p-3">
                          <div className="text-2xl mb-1">{m.icon}</div>
                          <div className="font-bold text-sm mb-1">{m.title}</div>
                          <div className="text-xs text-muted-foreground mb-2">{m.desc}</div>
                          <div className="text-xs bg-white rounded px-2 py-1 text-primary font-medium">{m.ex}</div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-green-50 border-l-4 border-primary rounded-lg p-4 flex gap-3">
                      <span className="text-xl">✨</span>
                      <p className="text-sm"><strong>하루치 일정을 한꺼번에 붙여넣기</strong>할 수도 있어요. AI가 자동으로 항목을 분리해서 저장합니다.</p>
                    </div>
                  </Card>
                )}
                {activeTab === "timeline" && (
                  <Card className="p-6 border-2 border-accent/20">
                    <h3 className="text-lg font-bold mb-1">📅 일정 탭 — 내 하루를 한눈에</h3>
                    <p className="text-sm text-muted-foreground mb-4">대화 탭에서 기록한 내용이 자동으로 나타납니다</p>
                    <div className="space-y-3 mb-4">
                      {[
                        { label: "일", title: "일간 뷰", desc: "오늘 하루의 기록을 시간 순서로 확인합니다. 각 항목을 눌러 수정하거나 삭제할 수 있습니다." },
                        { label: "주", title: "주간 뷰", desc: "이번 주 기록을 시간 그리드로 한눈에 봅니다. 어떤 요일에 어떤 활동을 했는지 패턴이 보입니다." },
                        { label: "월", title: "월간 뷰", desc: "이번 달 전체 기록을 달력 형태로 확인합니다." },
                      ].map((s) => (
                        <div key={s.label} className="flex gap-3">
                          <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{s.label}</div>
                          <div><strong>{s.title}</strong> — <span className="text-muted-foreground text-sm">{s.desc}</span></div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-blue-50 border-l-4 border-accent rounded-lg p-4 flex gap-3">
                      <span className="text-xl">📬</span>
                      <p className="text-sm"><strong>"어제 리포트"</strong> 버튼을 누르면 어제 하루 기록을 바탕으로 AI가 써준 건강 편지를 볼 수 있습니다.</p>
                    </div>
                  </Card>
                )}
                {activeTab === "report" && (
                  <Card className="p-6 border-2 border-yellow-200">
                    <h3 className="text-lg font-bold mb-1">📊 보고서 탭 — 변화를 숫자로 확인</h3>
                    <p className="text-sm text-muted-foreground mb-4">기록이 쌓일수록 더 정확해집니다</p>
                    <div className="space-y-3 mb-4">
                      {[
                        { num: "1", title: "수치 입력", desc: "우측 상단 📏 버튼을 눌러 체중, 혈압, 혈당을 직접 입력하거나, 대화 탭에서 말로 기록하면 자동으로 저장됩니다." },
                        { num: "2", title: "리포트 생성", desc: '"주간 리포트" 또는 "월간 리포트" 버튼을 누르면 AI가 기록을 분석해 맞춤 보고서를 만들어 드립니다.' },
                        { num: "3", title: "추이 확인", desc: "7일, 30일, 90일 단위로 수치 변화를 그래프로 확인할 수 있습니다." },
                      ].map((s) => (
                        <div key={s.num} className="flex gap-3">
                          <div className="w-8 h-8 bg-yellow-400 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{s.num}</div>
                          <div><strong>{s.title}</strong> — <span className="text-muted-foreground text-sm">{s.desc}</span></div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4 flex gap-3">
                      <span className="text-xl">📈</span>
                      <p className="text-sm">기록이 <strong>3일 이상(약 6~9끼)</strong> 쌓이면 "내 요리 철학 TOP 5"가 자동으로 분석됩니다.</p>
                    </div>
                  </Card>
                )}
                {activeTab === "profile" && (
                  <Card className="p-6 border-2 border-border">
                    <h3 className="text-lg font-bold mb-1">👤 프로필 탭 — 나의 기본 정보</h3>
                    <p className="text-sm text-muted-foreground mb-4">언제든 수정할 수 있습니다</p>
                    <div className="space-y-3 mb-4">
                      {[
                        { num: "1", title: "기본 정보", desc: "이름, 나이, 성별, 키, 몸무게를 입력합니다." },
                        { num: "2", title: "복약 정보", desc: "현재 복용 중인 약이 있다면 입력해두세요. AI가 복약 시간을 함께 관리해 드립니다." },
                        { num: "3", title: "건강 설문", desc: '프로필 화면에서 "건강 설문" 버튼을 눌러 상세 설문을 작성하거나 수정할 수 있습니다.' },
                      ].map((s) => (
                        <div key={s.num} className="flex gap-3">
                          <div className="w-8 h-8 bg-[#0F1B3D] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{s.num}</div>
                          <div><strong>{s.title}</strong> — <span className="text-muted-foreground text-sm">{s.desc}</span></div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-secondary/50 border-l-4 border-border rounded-lg p-4 flex gap-3">
                      <span className="text-xl">💪</span>
                      <p className="text-sm">InBody 체성분 측정 결과가 있다면 <strong>"InBody 체성분 입력"</strong>에 기록해두세요. AI가 더 정밀한 운동·식단 조언을 드릴 수 있습니다.</p>
                    </div>
                  </Card>
                )}
                {activeTab === "settings" && (
                  <Card className="p-6 border-2 border-purple-200">
                    <h3 className="text-lg font-bold mb-1">⚙️ 설정 탭 — 데이터 관리</h3>
                    <p className="text-sm text-muted-foreground mb-4">내 데이터는 내 기기에만 저장됩니다</p>
                    <div className="space-y-3 mb-4">
                      {[
                        { icon: "📤", title: "데이터 내보내기", desc: "내 기록을 JSON 파일로 저장해 백업할 수 있습니다." },
                        { icon: "📥", title: "데이터 불러오기", desc: "백업해둔 파일로 기록을 복원할 수 있습니다. 기기를 바꿀 때 유용합니다." },
                        { icon: "📖", title: "앱 사용법 다시 보기", desc: "처음 안내 화면을 다시 볼 수 있습니다." },
                        { icon: "🧹", title: "중복 일정 정리", desc: "실수로 중복 저장된 기록을 한 번에 정리합니다." },
                      ].map((s) => (
                        <div key={s.title} className="flex gap-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-sm flex-shrink-0">{s.icon}</div>
                          <div><strong>{s.title}</strong> — <span className="text-muted-foreground text-sm">{s.desc}</span></div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-purple-50 border-l-4 border-purple-400 rounded-lg p-4 flex gap-3">
                      <span className="text-xl">🔒</span>
                      <p className="text-sm">루틴핏의 모든 기록은 <strong>내 기기 안에만 저장</strong>됩니다. 인터넷에 업로드되거나 다른 사람이 볼 수 없습니다.</p>
                    </div>
                  </Card>
                )}
              </div>
            )}

            {/* ── 8가지 카테고리 ── */}
            {activeChapter === "categories" && (
              <div>
                <div className="inline-block text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">기록 카테고리</div>
                <h2 className="text-2xl font-bold text-foreground mb-1">8가지 카테고리로 하루 전체를 기록해요</h2>
                <div className="w-16 h-1 bg-primary rounded mb-4" />
                <p className="text-muted-foreground mb-8">AI가 입력 내용을 자동으로 분류합니다. 어떤 카테고리인지 몰라도 괜찮아요.</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[
                    { icon: "🍽️", name: "먹기", ex: "식사·간식·음료" },
                    { icon: "🏃", name: "움직이기", ex: "걷기·운동·활동" },
                    { icon: "😴", name: "쉬기", ex: "취침·기상·낮잠" },
                    { icon: "🚽", name: "용변", ex: "배변 기록" },
                    { icon: "💼", name: "직장", ex: "출근·업무·회의" },
                    { icon: "📚", name: "자기계발", ex: "독서·학습·공부" },
                    { icon: "🎨", name: "취미", ex: "취미·여가 활동" },
                    { icon: "👥", name: "대인관계", ex: "가족·친구·모임" },
                  ].map((cat) => (
                    <Card key={cat.name} className="p-4 text-center hover:shadow-md transition border-2 border-primary/10 hover:border-primary/30">
                      <div className="text-3xl mb-2">{cat.icon}</div>
                      <div className="font-bold text-sm mb-1">{cat.name}</div>
                      <div className="text-xs text-muted-foreground">{cat.ex}</div>
                    </Card>
                  ))}
                </div>

                <div className="bg-green-50 border-l-4 border-primary rounded-lg p-4 flex gap-3">
                  <span className="text-2xl">🤖</span>
                  <p className="text-sm"><strong>"아침에 계란 먹었어"라고 말하면 AI가 '먹기'로 자동 분류</strong>합니다. 그냥 편하게 말하면 됩니다.</p>
                </div>
              </div>
            )}

            {/* ── FAQ ── */}
            {activeChapter === "faq" && (
              <div>
                <div className="inline-block text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">자주 묻는 질문</div>
                <h2 className="text-2xl font-bold text-foreground mb-1">궁금한 점이 있으신가요?</h2>
                <div className="w-16 h-1 bg-primary rounded mb-4" />
                <p className="text-muted-foreground mb-8">눌러서 답변을 확인하세요.</p>

                <div className="space-y-3">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="border border-border rounded-lg overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full text-left px-5 py-4 flex items-center justify-between hover:bg-secondary/30 transition"
                      >
                        <span className="font-medium text-foreground">{faq.q}</span>
                        <span className={`text-muted-foreground transition-transform ${openFaq === idx ? "rotate-180" : ""}`}>▼</span>
                      </button>
                      {openFaq === idx && (
                        <div className="px-5 py-4 bg-secondary/20 text-sm text-muted-foreground border-t border-border">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

          </main>
        </div>

        {/* ── 모달 푸터 ── */}
        <div className="flex items-center justify-between px-6 py-3 bg-secondary/30 border-t border-border flex-shrink-0">
          <span className="text-xs text-muted-foreground">루틴핏 사용설명서 v1.0 · 2026년 5월</span>
          <button
            onClick={onClose}
            className="text-sm text-primary font-medium hover:underline flex items-center gap-1"
          >
            <X className="w-4 h-4" /> 닫고 홈으로
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   메인 홈 컴포넌트
───────────────────────────────────────── */
export default function Home() {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [currentCookingStep, setCurrentCookingStep] = useState(0);
  const [showGuide, setShowGuide] = useState(false);

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

  const cookingSteps = [
    { image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663607358559/7unLf8XtsqoDAFGSxfpHx2/cooking-step1-refrigerator-UvBuhk6v8U35V2VujBe6HG.webp", title: "냉장고 재료 촬영", desc: "냉장고 안의 재료들을 사진으로 찍어 AI에게 전달하세요." },
    { image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663607358559/7unLf8XtsqoDAFGSxfpHx2/cooking-step2-ai-analysis-RrVBjMsKgdNtMiRStm9w85.webp", title: "AI 분석 및 제안", desc: "AI가 당신의 건강 상태, 영양 필요도, 요리 능력을 고려해 3가지 요리를 추천합니다." },
    { image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663607358559/7unLf8XtsqoDAFGSxfpHx2/cooking-step3-recipe-korean-TwsX5FS7hDJ7KMXCqS34bp.webp", title: "최적의 요리 선택", desc: "추천된 요리 중 가장 적합한 것을 선택하고, 실시간 조리법 가이드를 받으세요." },
  ];

  // 10가지 상황 데이터
  const scenarios = [
    {
      icon: <Stethoscope className="w-7 h-7" />,
      color: "from-red-500 to-rose-600",
      bgLight: "bg-red-50",
      borderColor: "border-red-200",
      num: "01",
      title: "만성질환 관리",
      subtitle: "고혈압·당뇨",
      need: "매일 약 먹는 것을 깜빡하고, 식단이 혈당·혈압에 어떤 영향을 미치는지 파악하기 어렵습니다.",
      solution: "식사 기록 분석으로 혈당 스파이크 경고, 복약 알림, 저염·저당 대체 식재료를 구체적으로 추천합니다.",
      image: "/s01_chronic_disease.jpg",
      videoId: "VIDEO_ID_1",
    },
    {
      icon: <Activity className="w-7 h-7" />,
      color: "from-amber-500 to-orange-500",
      bgLight: "bg-amber-50",
      borderColor: "border-amber-200",
      num: "02",
      title: "두피·모발 케어",
      subtitle: "탈모·두피 루틴",
      need: "비싼 탈모 샴푸를 써도 효과가 없고, 스트레스 받은 날 머리카락이 더 빠지는 것 같아 불안합니다.",
      solution: "스트레스 지수와 수면 패턴을 탈모 증상과 교차 분석하고, 비오틴·단백질 섭취량을 모니터링합니다.",
      image: "/s02_hair_scalp.jpg",
      videoId: "VIDEO_ID_2",
    },
    {
      icon: <Moon className="w-7 h-7" />,
      color: "from-indigo-500 to-violet-600",
      bgLight: "bg-indigo-50",
      borderColor: "border-indigo-200",
      num: "03",
      title: "수면·피로 회복",
      subtitle: "수면장애·만성피로",
      need: "충분히 잤는데도 아침에 개운하지 않고, 오후 3시면 극심한 피로감이 옵니다.",
      solution: "카페인 섭취 시간과 수면의 질을 분석해 최적 타이밍을 가이드하고, 비타민B·마그네슘 식단을 추천합니다.",
      image: "/s03_sleep_fatigue.jpg",
      videoId: "VIDEO_ID_3",
    },
    {
      icon: <Scale className="w-7 h-7" />,
      color: "from-emerald-500 to-teal-600",
      bgLight: "bg-emerald-50",
      borderColor: "border-emerald-200",
      num: "04",
      title: "체중·체형 관리",
      subtitle: "다이어트·감량",
      need: "극단적 다이어트에 지쳐 있고, 불규칙한 생활 패턴에 맞는 지속 가능한 감량 방법을 찾고 싶습니다.",
      solution: "다량영양소 비율을 정밀 분석하고, 여성은 생리 주기와 연동해 체중 정체기를 예측·멘탈 케어합니다.",
      image: "/s04_weight_diet.jpg",
      videoId: "VIDEO_ID_4",
    },
    {
      icon: <Bone className="w-7 h-7" />,
      color: "from-cyan-500 to-blue-600",
      bgLight: "bg-cyan-50",
      borderColor: "border-cyan-200",
      num: "05",
      title: "근골격계 관리",
      subtitle: "관절염·통증",
      need: "비 오는 날이나 무리한 날 무릎·허리 통증이 심해지고, 운동을 쉬어야 할지 해야 할지 판단이 어렵습니다.",
      solution: "기상 데이터와 활동량·통증 기록을 연동해 통증 악화일을 사전 경고하고, 저강도 맞춤 운동을 제안합니다.",
      image: "/s05_joint_pain.jpg",
      videoId: "VIDEO_ID_1",
    },
    {
      icon: <Brain className="w-7 h-7" />,
      color: "from-purple-500 to-fuchsia-600",
      bgLight: "bg-purple-50",
      borderColor: "border-purple-200",
      num: "06",
      title: "정신건강 관리",
      subtitle: "우울·불안장애",
      need: "감정 기복이 심하지만 원인을 모르고, 병원 상담 전 심리 상태를 객관적 데이터로 확인하고 싶습니다.",
      solution: "수면 부족·당류 과다 섭취가 감정에 미치는 영향을 리포트로 제공하고, 불안 패턴 감지 시 호흡 명상을 안내합니다.",
      image: "/s06_mental_health.jpg",
      videoId: "VIDEO_ID_2",
    },
    {
      icon: <Thermometer className="w-7 h-7" />,
      color: "from-pink-500 to-rose-500",
      bgLight: "bg-pink-50",
      borderColor: "border-pink-200",
      num: "07",
      title: "내분비계 관리",
      subtitle: "갑상선·호르몬 불균형",
      need: "식사량이 늘지 않았는데 체중이 증가하고, 이게 약 때문인지 생활 습관 때문인지 구분하고 싶습니다.",
      solution: "약 복용 시간과 피로감의 상관관계를 그래프로 분석하고, 요오드 섭취량 모니터링과 생체 리듬 가이드를 제공합니다.",
      image: "/s07_thyroid.jpg",
      videoId: "VIDEO_ID_3",
    },
    {
      icon: <Apple className="w-7 h-7" />,
      color: "from-green-500 to-emerald-600",
      bgLight: "bg-green-50",
      borderColor: "border-green-200",
      num: "08",
      title: "소화기계 관리",
      subtitle: "소화기 질환·장 건강",
      need: "식사 후 자주 체하거나 가스가 차고, 어떤 식재료가 내 장에 맞지 않는지 과학적으로 찾고 싶습니다.",
      solution: "식사 기록과 소화 불량 증상을 FODMAP 데이터와 교차 분석해 개인별 트리거 음식을 도출합니다.",
      image: "/s08_gut_health.jpg",
      videoId: "VIDEO_ID_4",
    },
    {
      icon: <Dumbbell className="w-7 h-7" />,
      color: "from-orange-500 to-amber-600",
      bgLight: "bg-orange-50",
      borderColor: "border-orange-200",
      num: "09",
      title: "재활·회복 관리",
      subtitle: "운동 재활·부상 회복",
      need: "수술·부상 후 회복 중이며, 어느 정도 강도로 움직여야 관절에 무리가 가지 않는지 항상 불안합니다.",
      solution: "아연·고품질 단백질 위주 식단을 매일 추천하고, 점진적 과부하 원칙에 따른 주차별 안전 활동량 목표를 설정합니다.",
      image: "/s09_rehabilitation.jpg",
      videoId: "VIDEO_ID_1",
    },
    {
      icon: <Baby className="w-7 h-7" />,
      color: "from-teal-500 to-cyan-600",
      bgLight: "bg-teal-50",
      borderColor: "border-teal-200",
      num: "10",
      title: "가족·돌봄 관리",
      subtitle: "가족 건강 통합",
      need: "멀리 사는 고령 부모님이 식사와 복약을 잘 챙기시는지 항상 걱정하며 확인하고 싶습니다.",
      solution: "부모님 앱 사용 기록을 바탕으로 보호자에게 주간 요약 리포트를 자동 발송하고, 누락 시 즉시 알림을 보냅니다.",
      image: "/s10_family_care.jpg",
      videoId: "VIDEO_ID_2",
    },
  ];

  // 홍보영상 4개 (YouTube ID 교체 예정)
  const promoVideos = [
    {
      id: "promo1",
      title: "루틴핏 소개 영상",
      desc: "당신만을 위한 AI 건강 주치의, 루틴핏을 소개합니다.",
      youtubeId: "PROMO_VIDEO_ID_1",
      thumbnail: "/promo1_health_app.jpg",
    },
    {
      id: "promo2",
      title: "3초 입력 기능 소개",
      desc: "사진·음성·텍스트로 3초 만에 기록하는 방법을 알아보세요.",
      youtubeId: "PROMO_VIDEO_ID_2",
      thumbnail: "/promo2_voice_input.jpg",
    },
    {
      id: "promo3",
      title: "AI 맞춤 요리 추천",
      desc: "냉장고 재료로 나만의 건강 요리를 추천받는 과정을 보여드립니다.",
      youtubeId: "PROMO_VIDEO_ID_3",
      thumbnail: "/promo3_cooking.jpg",
    },
    {
      id: "promo4",
      title: "10가지 맞춤형 솔루션",
      desc: "만성질환부터 가족 돌봄까지, 루틴핏의 10가지 맞춤형 건강 솔루션을 소개합니다.",
      youtubeId: "PROMO_VIDEO_ID_4",
      thumbnail: "/promo4_solutions.jpg",
    },
  ];

  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const nextScreenshot = () => setCurrentScreenshot((p) => (p + 1) % screenshots.length);
  const prevScreenshot = () => setCurrentScreenshot((p) => (p - 1 + screenshots.length) % screenshots.length);
  const nextCookingStep = () => setCurrentCookingStep((p) => (p + 1) % cookingSteps.length);
  const prevCookingStep = () => setCurrentCookingStep((p) => (p - 1 + cookingSteps.length) % cookingSteps.length);

  return (
    <div className="min-h-screen bg-white">

      {/* 사용설명서 모달 */}
      {showGuide && <GuideModal onClose={() => setShowGuide(false)} />}

      {/* ── Navigation ── */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="font-bold text-xl text-foreground">루틴핏</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-foreground hover:text-primary transition text-sm">기능</a>
            <a href="#cooking" className="text-foreground hover:text-primary transition text-sm">음식</a>
            <a href="#personalization" className="text-foreground hover:text-primary transition text-sm">맞춤형</a>
            <a href="#screenshots" className="text-foreground hover:text-primary transition text-sm">앱 화면</a>
            <a href="#promo-videos" className="text-foreground hover:text-primary transition text-sm">홍보영상</a>
            {/* 사용설명서 버튼 */}
            <button
              onClick={() => setShowGuide(true)}
              className="flex items-center gap-1.5 text-primary font-semibold text-sm border-b-2 border-primary pb-0.5 hover:text-primary/80 transition"
            >
              <BookOpen className="w-4 h-4" />
              사용설명서
            </button>
            <a href="#faq" className="text-foreground hover:text-primary transition text-sm">FAQ</a>
          </div>
          <div className="flex items-center gap-3">
            {/* 모바일 사용설명서 버튼 */}
            <button
              onClick={() => setShowGuide(true)}
              className="md:hidden flex items-center gap-1 text-primary text-sm font-medium"
            >
              <BookOpen className="w-4 h-4" />
              설명서
            </button>
            <Button className="bg-primary hover:bg-primary/90">앱 다운로드</Button>
          </div>
        </div>
      </nav>

      {/* ── Hero Section ── */}
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
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setShowGuide(true)}
                  className="flex items-center gap-2"
                >
                  <BookOpen className="w-5 h-5" /> 사용설명서 보기
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

      {/* ── Problem & Solution ── */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">건강 관리, 왜 어려울까요?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">기존 건강 앱의 한계를 루틴핏이 해결합니다.</p>
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

      {/* ── 건강의 4대 요소 ── */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">건강의 4대 요소</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">루틴핏은 건강을 4가지 핵심 요소로 정의하고 통합 관리합니다.</p>
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

      {/* ── Core Features ── */}
      <section id="features" className="py-20 md:py-32 bg-blue-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">루틴핏의 핵심 기능</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">복잡한 건강 관리를 간단하고 효과적으로 만드는 기능들</p>
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
              { icon: <Zap className="w-8 h-8 text-primary" />, title: "3초 입력", desc: "사진 1장, 음성 10초, 텍스트 한 줄로 기록 완료. 입력 시간 90% 단축." },
              { icon: <TrendingUp className="w-8 h-8 text-primary" />, title: "AI 초개인화 분석", desc: "Claude Sonnet 기반 AI가 당신의 건강 데이터를 분석해 맞춤형 제안을 제공합니다." },
              { icon: <Heart className="w-8 h-8 text-primary" />, title: "즉각 피드백", desc: "기록 즉시 점수 표시 및 반응 제공. 행동 변화를 유도합니다." },
            ].map((f, i) => (
              <Card key={i} className="p-8 hover:shadow-lg transition">
                <div className="mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{f.title}</h3>
                <p className="text-muted-foreground">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI Cooking ── */}
      <section id="cooking" className="py-20 md:py-32 bg-green-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">AI 맞춤 요리 추천</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">루틴핏의 가장 강력한 기능 - 냉장고 재료로 당신의 건강을 위한 요리를 추천받으세요</p>
          </div>
          <div className="max-w-5xl mx-auto mb-16">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="relative aspect-video md:aspect-auto md:h-[500px] flex items-center justify-center bg-gray-50">
                <img src={cookingSteps[currentCookingStep].image} alt={cookingSteps[currentCookingStep].title} className="h-full w-auto object-contain" />
              </div>
              <button onClick={prevCookingStep} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition flex items-center justify-center hover:bg-primary hover:text-white">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextCookingStep} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition flex items-center justify-center hover:bg-primary hover:text-white">
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="bg-gradient-to-r from-primary to-accent p-6 md:p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{cookingSteps[currentCookingStep].title}</h3>
                <p className="text-white/90">{cookingSteps[currentCookingStep].desc}</p>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-8">
              {cookingSteps.map((_, i) => (
                <button key={i} onClick={() => setCurrentCookingStep(i)} className={`w-3 h-3 rounded-full transition ${i === currentCookingStep ? "bg-primary w-8" : "bg-border hover:bg-muted-foreground"}`} />
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 border-2 border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-8">AI 요리 추천의 기준</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-bold text-primary mb-4">AI가 고려하는 요소</h4>
                <ul className="space-y-3">
                  {["현재의 건강 상태 (혈당, 혈압, 체중 등)", "현재 영양 상태 및 부족한 영양소", "냉장고 안의 재료 보유 현황", "사용자의 요리 능력 정도"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-4">제안 시 중점 사항</h4>
                <ul className="space-y-3">
                  {["요리의 영양가 - 건강에 최적화", "요리의 난이도 - 실제 조리 가능성", "재료의 가성비 - 경제적 효율성", "조리 시간 - 바쁜 일상에 맞춤"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border-l-4 border-primary">
              <h4 className="font-bold text-foreground mb-4">추가 기준 - 더욱 정교한 추천</h4>
              <div className="space-y-4">
                {[
                  { n: "1", t: "6개의 기초설문을 바탕으로 당신의 주치의가 준비되어 있는 상태", d: "건강 목표, 식이 선호도, 알레르기, 운동 수준, 생활 패턴, 질환 이력 등을 파악하여 초기 프로필 구성" },
                  { n: "2", t: "7일간의 사용자 입력 데이터 분석으로 최선의 요리추천", d: "당신의 선호음식, 요리수준, 일상패턴을 다 파악하는 상태로 진화" },
                  { n: "3", t: "냉장고안 재료를 바탕으로 위 두사항들을 고려해 최선의 음식 추천", d: "개인의 건강 프로필 + 7일 데이터 + 현재 냉장고 재료 = 최적화된 맞춤 요리 제안" },
                ].map((s) => (
                  <div key={s.n} className="flex gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">{s.n}</div>
                    <div>
                      <p className="font-bold text-foreground">{s.t}</p>
                      <p className="text-sm text-muted-foreground mt-1">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── App Screenshots ── */}
      <section id="screenshots" className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">루틴핏 앱 화면 둘러보기</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">앱의 주요 기능을 직관적으로 확인하세요</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="relative aspect-video md:aspect-auto md:h-[600px] flex items-center justify-center bg-gray-50">
                <img src={screenshots[currentScreenshot].image} alt={screenshots[currentScreenshot].title} className="h-full w-auto object-contain" />
              </div>
              <button onClick={prevScreenshot} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition flex items-center justify-center hover:bg-primary hover:text-white">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextScreenshot} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition flex items-center justify-center hover:bg-primary hover:text-white">
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="bg-gradient-to-r from-primary to-accent p-6 md:p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{screenshots[currentScreenshot].title}</h3>
                <p className="text-white/90">{screenshots[currentScreenshot].desc}</p>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-8 flex-wrap">
              {screenshots.map((_, i) => (
                <button key={i} onClick={() => setCurrentScreenshot(i)} className={`w-2 h-2 rounded-full transition ${i === currentScreenshot ? "bg-primary w-6" : "bg-border hover:bg-muted-foreground"}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          맞춤형 섹션 — 10가지 상황으로 재구성
      ══════════════════════════════════════ */}
      <section id="personalization" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block text-sm font-bold text-primary bg-primary/10 px-4 py-2 rounded-full mb-4">AI 맞춤형 솔루션</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              당신의 상황에 맞는<br />
              <span className="text-primary">10가지 건강 솔루션</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              루틴핏의 AI는 당신의 구체적인 상황을 이해하고, 실질적인 건강 변화를 설계합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {scenarios.map((s) => (
              <Card key={s.num} className={`overflow-hidden border-2 ${s.borderColor} hover:shadow-xl transition-all duration-300 group`}>
                {/* 카드 헤더 */}
                <div className={`bg-gradient-to-r ${s.color} p-5 text-white`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        {s.icon}
                      </div>
                      <div>
                        <div className="text-xs font-bold opacity-80 mb-0.5">상황 {s.num}</div>
                        <h3 className="text-lg font-bold leading-tight">{s.title}</h3>
                        <p className="text-sm opacity-90">{s.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 카드 이미지 */}
                {s.image && (
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${s.color} opacity-20`} />
                  </div>
                )}

                {/* 카드 본문 */}
                <div className={`p-5 ${s.bgLight}`}>
                  <div className="mb-4">
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">사용자 니즈</div>
                    <p className="text-sm text-foreground leading-relaxed">{s.need}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-white shadow-sm">
                    <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 루틴핏 AI 솔루션
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">{s.solution}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          홍보영상 4개 섹션
      ══════════════════════════════════════ */}
      <section id="promo-videos" className="py-20 md:py-32 bg-[#0F1B3D]">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block text-sm font-bold text-primary bg-primary/20 px-4 py-2 rounded-full mb-4">홍보 영상</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              루틴핏을 영상으로 만나보세요
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              루틴핏의 핵심 기능과 실제 사용 경험을 영상으로 확인하세요.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {promoVideos.map((video) => (
              <div key={video.id} className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
                {/* 썸네일 / 영상 영역 */}
                <div className="relative aspect-video bg-black overflow-hidden">
                  {playingVideo === video.id ? (
                    /* YouTube iframe (실제 ID로 교체 시 재생) */
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* 어두운 오버레이 */}
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition" />
                      {/* 재생 버튼 */}
                      <button
                        onClick={() => setPlayingVideo(video.id)}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-7 h-7 text-primary ml-1" fill="currentColor" />
                        </div>
                      </button>
                      {/* 영상 번호 배지 */}
                      <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                        영상 {promoVideos.indexOf(video) + 1}
                      </div>
                    </>
                  )}
                </div>

                {/* 영상 정보 */}
                <div className="p-5">
                  <h3 className="font-bold text-white text-lg mb-2">{video.title}</h3>
                  <p className="text-white/60 text-sm">{video.desc}</p>
                  {playingVideo !== video.id && (
                    <button
                      onClick={() => setPlayingVideo(video.id)}
                      className="mt-4 flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
                    >
                      <Play className="w-4 h-4" fill="currentColor" /> 영상 재생하기
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* 안내 문구 */}
          <div className="mt-10 text-center">
            <p className="text-white/40 text-sm">
              * 영상 업로드 후 YouTube 링크를 연결하면 바로 재생됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── Target Audience ── */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">누구를 위한 앱인가요?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">루틴핏은 건강 관리가 필요한 모든 사람을 위한 앱입니다.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "40~60대 만성질환 관리자", desc: "고혈압, 당뇨, 다이어트 등 질환 관리가 필요한 중장년층" },
              { title: "1인 가구 전 연령", desc: "건강한 식단 관리가 어려운 1인 가구" },
              { title: "주부 및 보호자", desc: "가족의 건강을 챙기는 주부와 보호자" },
              { title: "다이어트 및 체질 개선 성인", desc: "건강한 생활습관을 원하는 모든 성인" },
            ].map((t, i) => (
              <Card key={i} className="p-8 border-2 border-primary/20 hover:border-primary transition">
                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{t.title}</h3>
                    <p className="text-muted-foreground">{t.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">사용자 후기</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">루틴핏과 함께 건강한 변화를 경험한 사용자들의 이야기</p>
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

      {/* ── Competitive Advantage ── */}
      <section className="py-20 md:py-32 bg-green-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">루틴핏의 차별화된 경쟁력</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">기능이 아니라 데이터가 경쟁력입니다.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "복제 불가 데이터 자산", desc: "사용자의 실제 행동·결과 데이터는 외부 수집 불가. 시간 기반 축적으로만 가능한 고유 자산입니다." },
              { title: "행동-결과 인과 분석", desc: "단순 수치가 아닌 '식단 → 체중 변화' 같은 인과 데이터를 분석해 최적 전략을 제시합니다." },
              { title: "한국 50~60대 특화 데이터", desc: "글로벌 빅테크도 보유하지 못한 한국 중장년층의 고유 건강 데이터입니다." },
            ].map((a, i) => (
              <Card key={i} className="p-8 bg-white border-2 border-accent/20 hover:border-accent transition">
                <h3 className="text-lg font-bold text-foreground mb-3">{a.title}</h3>
                <p className="text-muted-foreground">{a.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── UX Principles ── */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">루틴핏의 UX 설계 원칙</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">모든 연령대가 쉽게 이용할 수 있는 직관적 디자인</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { num: "1", title: "3초 입력", desc: "사진, 음성, 텍스트로 빠르게" },
              { num: "2", title: "즉각 피드백", desc: "기록 즉시 반응 제공" },
              { num: "3", title: "한 화면 한 행동", desc: "복잡한 메뉴 없음" },
              { num: "4", title: "큰 글씨·버튼", desc: "50~60대 가독성 우선" },
              { num: "5", title: "3일 기준", desc: "3일 이상 사용 가능" },
            ].map((p, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">{p.num}</div>
                <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">자주 묻는 질문</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "루틴핏은 정말 무료인가요?", a: "네, 기본 기능은 완전히 무료입니다. 개인화 분석과 전문 코칭 등 프리미엄 기능은 유료 구독으로 이용할 수 있습니다." },
              { q: "내 건강 데이터는 안전한가요?", a: "모든 데이터는 암호화되어 안전하게 저장됩니다. 개인정보보호법을 완벽히 준수하며, 당신의 데이터는 당신의 것입니다." },
              { q: "60대도 쉽게 사용할 수 있나요?", a: "네, 루틴핏은 50~60대 사용자를 위해 특별히 설계되었습니다. 큰 글씨, 큰 버튼, 단순한 흐름으로 모든 연령대가 쉽게 사용할 수 있습니다." },
              { q: "AI 분석은 의료 조언을 대체할 수 있나요?", a: "아니요, 루틴핏은 의료 전문가를 대체하지 않습니다. 건강 관리를 위한 보조 도구이며, 중요한 건강 결정은 항상 의료 전문가와 상담하세요." },
            ].map((faq, i) => (
              <Card key={i} className="p-6 hover:shadow-md transition">
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

      {/* ── CTA ── */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">지금 바로 시작하세요</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
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
              onClick={() => setShowGuide(true)}
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
            </div>
            <div>
              <h4 className="font-bold mb-4">제품</h4>
              <ul className="space-y-2 text-sm opacity-70">
                <li><a href="#features" className="hover:opacity-100 transition">기능</a></li>
                <li><a href="#promo-videos" className="hover:opacity-100 transition">홍보영상</a></li>
                <li><a href="#" className="hover:opacity-100 transition">다운로드</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">도움말</h4>
              <ul className="space-y-2 text-sm opacity-70">
                <li>
                  <button onClick={() => setShowGuide(true)} className="hover:opacity-100 transition text-left">
                    사용설명서
                  </button>
                </li>
                <li><a href="#faq" className="hover:opacity-100 transition">FAQ</a></li>
                <li><a href="#" className="hover:opacity-100 transition">문의</a></li>
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

// ─────────────────────────────────────────────────────────────
// 여기 내용만 수정하면 사이트 전체가 업데이트됩니다.
// (이미지/프로젝트 링크는 실제 값으로 바꿔주세요)
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Yoonju',
  fullName: 'Yoonju Lee',
  role: 'a product designer',
  emoji: '👋',
  intro:
    '사용자의 문제를 깊이 들여다보고, 명확하고 의미 있는 경험으로 풀어내는 일을 합니다. 본인의 소개 문장을 자유롭게 채워보세요.',
  email: 'lovingjoo@gmail.com',
  location: 'Seoul, Korea',
  available: true,
}

// 상단 네비게이션
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Works', href: '#works' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

// 소셜 링크 (사용하지 않을 항목은 지우세요)
export const socials = [
  { label: 'Email', href: 'mailto:lovingjoo@gmail.com', short: '✉' },
  { label: 'LinkedIn', href: '#', short: 'in' },
  { label: 'Instagram', href: '#', short: 'ig' },
]

// 선택된 작업물 — 각 항목이 큰 카드 한 줄로 표시됩니다.
export const works = [
  {
    title: 'Project One',
    category: 'UX · UI Design',
    description:
      '프로젝트에 대한 한두 문장 설명을 적어주세요. 어떤 문제를 어떻게 풀었는지 간결하게.',
    link: '#',
    tint: 'pink',
  },
  {
    title: 'Project Two',
    category: 'Product Design',
    description:
      '프로젝트에 대한 한두 문장 설명을 적어주세요. 어떤 문제를 어떻게 풀었는지 간결하게.',
    link: '#',
    tint: 'blue',
  },
  {
    title: 'Project Three',
    category: 'Branding · Web',
    description:
      '프로젝트에 대한 한두 문장 설명을 적어주세요. 어떤 문제를 어떻게 풀었는지 간결하게.',
    link: '#',
    tint: 'purple',
  },
  {
    title: 'Project Four',
    category: 'Mobile App',
    description:
      '프로젝트에 대한 한두 문장 설명을 적어주세요. 어떤 문제를 어떻게 풀었는지 간결하게.',
    link: '#',
    tint: 'green',
  },
]

// About 섹션 본문
export const about = {
  heading: 'Hey! That’s me.',
  body: [
    '안녕하세요, Yoonju입니다. 저는 ___ 분야에서 ___년 동안 일하며 사용자 중심의 디자인을 만들어 왔습니다.',
    '복잡한 문제를 단순하고 아름다운 경험으로 바꾸는 데 관심이 많습니다. 이 영역에 본인의 이야기를 자유롭게 채워보세요.',
  ],
}

// 역량 태그
export const capabilities = [
  'Product Design',
  'UX/UI Design',
  'Design System',
  'Prototyping',
  'User Research',
  'Branding',
  'Web Design',
  'Interaction',
]

// 숫자로 보여주는 성과 (필요 없으면 빈 배열 [])
export const stats = [
  { value: '5+', label: 'Years experience' },
  { value: '30+', label: 'Projects done' },
  { value: '12', label: 'Happy clients' },
]

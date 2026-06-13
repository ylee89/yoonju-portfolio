import './App.css'

const projects = [
  {
    title: '프로젝트 1',
    description: '간단한 프로젝트 설명을 여기에 작성하세요.',
    link: '#',
  },
  {
    title: '프로젝트 2',
    description: '간단한 프로젝트 설명을 여기에 작성하세요.',
    link: '#',
  },
  {
    title: '프로젝트 3',
    description: '간단한 프로젝트 설명을 여기에 작성하세요.',
    link: '#',
  },
]

function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>안녕하세요, Yoonju입니다.</h1>
        <p>여기에 자기소개 한 줄을 적어보세요.</p>
      </header>

      <section className="section">
        <h2>About</h2>
        <p>
          저는 ___ 분야에서 일하고 있으며, ___에 관심이 많습니다. 이 영역에
          본인의 이야기를 자유롭게 채워보세요.
        </p>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div className="projects">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="project-card"
              target="_blank"
              rel="noreferrer"
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Contact</h2>
        <p>
          이메일: <a href="mailto:hello@example.com">hello@example.com</a>
        </p>
      </section>

      <footer className="footer">
        <small>© {new Date().getFullYear()} Yoonju. All rights reserved.</small>
      </footer>
    </div>
  )
}

export default App

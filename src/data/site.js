/** All portfolio content and links live here. Edit this file to update your site. */
export const person = {
  name: 'Manoj Kumar Sunkara',
  firstName: 'Manoj',
  role: 'AI / ML Engineer & Researcher',
  location: 'Hyderabad, India',
  email: 'Manojsunkara71@gmail.com',
  headline: 'Building intelligence into real-world systems.',
  intro: 'I’m an AI & Machine Learning undergraduate at CBIT, Hyderabad. I design agentic AI, retrieval systems, and full-stack experiences that turn complex ideas into useful products.',
  socials: {
    github: 'https://github.com/bytemonkk',
    linkedin: 'https://www.linkedin.com/in/manojsunkara',
    leetcode: 'https://leetcode.com/u/JarvisElliot/',
  },
}

export const projects = [
  {
    id: 'medical',
    number: '01',
    label: 'AGENTIC AI / HEALTHCARE',
    title: 'Medical Diagnosis AI Assistant',
    summary: 'An intelligent assistant that makes medical documents searchable, understandable, and conversational.',
    details: 'Built an agentic, tool-calling pipeline to extract diseases, symptoms, tests, and treatments. Added semantic retrieval and conversational Q&A via FastAPI.',
    stack: ['LangChain', 'RAG', 'FAISS', 'FastAPI'],
    github: 'https://github.com/bytemonkk/Medical-Assistant',
    visual: 'medical',
  },
  {
    id: 'institutional',
    number: '02',
    label: 'LLM SYSTEMS / SEARCH',
    title: 'Institutional RAG Assistant',
    summary: 'A privacy-conscious knowledge assistant built for natural-language discovery across institutional content.',
    details: 'Crawled and indexed web pages, built a retrieval pipeline with BGE embeddings and Qdrant, and connected local Qwen2.5-Instruct with tool orchestration.',
    stack: ['Qwen2.5', 'Qdrant', 'RAG', 'Python'],
    github: 'https://github.com/bytemonkk/cbit-rag-assistant',
    visual: 'institutional',
  },
  {
    id: 'quickdine',
    number: '03',
    label: 'FULL STACK / PRODUCT',
    title: 'QuickDine',
    summary: 'Restaurant discovery and table booking, with real application workflows from authentication to reservations.',
    details: 'Built a platform integrating 15+ REST APIs with Node.js, Express, and MongoDB, including JWT login, role-based access for three roles, and Cloudinary uploads.',
    stack: ['React', 'Node.js', 'MongoDB', 'JWT'],
    github: 'https://github.com/bytemonkk/QuickDine-workspace',
    live: 'https://quick-dine-workspace.vercel.app/',
    visual: 'quickdine',
  },
]

export const highlights = [
  { number: '700+', label: 'LeetCode problems' },
  { number: '8.89', label: 'CGPA at CBIT' },
  { number: '04', label: 'Research & awards' },
]

export const research = [
  {
    kind: 'PUBLICATION',
    year: '2026',
    name: 'FusionPhishGuard',
    title: 'Multi-Branch Deep Learning for Phishing Detection',
    organization: 'IEEE COMSNETS 2026 · SysAI Track',
    detail: 'Published research',
  },
  {
    kind: 'ACCEPTED PRESENTATION',
    year: '2026',
    name: 'RyTHu-SaMaNVaYA',
    title: 'Teacher–Student Adaptation for Agricultural Indic ASR',
    organization: 'IEEE DSAA 2026',
    detail: 'Accepted for short presentation',
  },
  {
    kind: 'BEST POSTER',
    year: '2025',
    name: 'MF-HSINet',
    title: 'Mamba-Enhanced Attention Fusion for Hyperspectral Classification',
    organization: 'ICAIATI 2025',
    detail: 'Best Poster Award',
  },
  {
    kind: 'BEST MAJOR PROJECT',
    year: '2026',
    name: 'PaveVision',
    title: 'AI-Powered Pavement Distress Detection and PCI Estimation with YOLOv8',
    organization: 'CBIT · Department of Civil Engineering',
    detail: 'Best Major Project Award',
  },
]

export const skills = [
  {
    number: '01',
    title: 'AI / ML & Agents',
    caption: 'Intelligent applications',
    items: ['LangChain', 'RAG', 'LLM Agents', 'Tool Calling', 'Hugging Face', 'Unsloth', 'MCP'],
  },
  {
    number: '02',
    title: 'Backend & Data',
    caption: 'Systems that scale',
    items: ['Python', 'Node.js', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Redis', 'SQL'],
  },
  {
    number: '03',
    title: 'DevOps & Infra',
    caption: 'From build to deploy',
    items: ['Docker', 'Kubernetes', 'Kafka', 'Linux', 'Ansible', 'Jenkins'],
  },
  {
    number: '04',
    title: 'Engineering',
    caption: 'Strong foundations',
    items: ['C++', 'React.js', 'System Design', 'DSA', 'OOP', 'DBMS', 'Computer Networks'],
  },
]

export const certifications = [
  'Data Structures and Algorithms using Python · Udemy',
  'Machine Learning and Deep Learning · Udemy',
  'Web Development · Internshala',
]

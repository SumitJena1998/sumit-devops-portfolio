export const FRAME_COUNT = 169;

export const framePath = (n: number) =>
  `/frames/frame_${String(n).padStart(4, "0")}.jpg`;

export type Dialogue = {
  id: string;
  show: number;
  hide: number;
  quote: string;
  speaker: string;
  film: string;
};

export const DIALOGUES: Dialogue[] = [
  {
    id: "d1",
    show: 0.1,
    hide: 0.3,
    quote: "Automating infrastructure and accelerating deployments with DevOps.",
    speaker: "Sumit Jena",
    film: "DEVOPS ENGINEER",
  },
  {
    id: "d2",
    show: 0.35,
    hide: 0.55,
    quote: "AWS • Terraform • Docker • Kubernetes • Jenkins",
    speaker: "Sumit Jena",
    film: "CLOUD & AUTOMATION",
  },
  {
    id: "d3",
    show: 0.6,
    hide: 0.8,
    quote: "Building scalable, secure and reliable cloud infrastructure.",
    speaker: "Sumit Jena",
    film: "DEVOPS ARCHITECT",
  },
];

export const HERO_TEXT_FADE_END = 0.08;

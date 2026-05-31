export const CINE_FRAME_COUNT = 169;

export const cineFramePath = (n: number) =>
  `/frames2/frame_${String(n).padStart(4, "0")}.jpg`;

export type Beat = {
  id: string;
  show: number;
  hide: number;
  label: string;
  quote: string;
  speaker: string;
  film: string;
};

export const BEATS: Beat[] = [
  {
    id: "b1",
    show: 0.1,
    hide: 0.3,
    label: "01 — AWS Cloud",
    quote: "Designing and managing scalable cloud infrastructure on AWS.",
    speaker: "Sumit Jena",
    film: "AWS CLOUD",
  },
  {
    id: "b2",
    show: 0.35,
    hide: 0.55,
    label: "02 — DevOps Automation",
    quote: "Automating deployments with Terraform, Jenkins and Docker.",
    speaker: "Sumit Jena",
    film: "DEVOPS ENGINEER",
  },
  {
    id: "b3",
    show: 0.6,
    hide: 0.8,
    label: "03 — Kubernetes",
    quote: "Building reliable, scalable and highly available container platforms.",
    speaker: "Sumit Jena",
    film: "KUBERNETES",
  },
];
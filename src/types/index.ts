import type { ReactNode } from "react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Experience {
  period: string;
  role: string;
  place: string;
  desc: string;
}

export interface Education {
  period: string;
  degree: string;
  institution: string;
  desc: string;
}

export interface Skill {
  name: string;
  percent: number;
}

export interface Project {
  id: number;
  category: string;
  title: string;
  image: string;
}

export interface Service {
  title: string;
  desc: string;
  icon: ReactNode;
}

export interface Testimonial {
  id: number;
  text: string;
  name: string;
  location: string;
  avatar: string;
}

export interface Post {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  comments: number;
}

export interface Comment {
  id: number;
  name: string;
  avatar: string;
  text: string;
}

export type FormStatus = "idle" | "loading" | "success" | "error";

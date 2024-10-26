export declare namespace Models {
  export interface ITranslation {
    lang: string;
    code: string;
    title: string;
    description: string;
  }

  export interface ProjectCard {
    id: number;
    title: string;
    job: string;
    date: string;
    description: string;
    image: {
      srcDesktop?: string;
      srcMobile?: string;
      src?: string;
      alt: string;
      title: string;
    };
    technologies: string[];
    slug: string;
  }
}

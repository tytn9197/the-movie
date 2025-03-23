export type MovieCreditsType = {
  id: number;
  cast: {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
  }[];
  crew: {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    job: string;
  }[];
};


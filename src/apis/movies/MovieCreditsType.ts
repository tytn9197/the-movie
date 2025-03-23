export type CastType = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  profile_path: string; 
  character: string;
}

export type CrewType = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  job: string;
  profile_path: string;
}

export type MovieCreditsType = {
  id: number;
  cast: CastType[];
  crew: CrewType[];
};


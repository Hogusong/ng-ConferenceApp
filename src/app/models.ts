export interface USER {
  id?: string;
  avatar?: string;
  username: string;
  password: string;
  email: string;
  favorites: { id: string, name: string }[];       // session's id and name.
  trackFilter: { name: string, isChecked: boolean }[];
  seenTutorial?: boolean;
}

export interface TRACK {
  id?: string;
  name: string;
}

export interface  SPEAKER {
  id?: string;
  name: string;
  profilePic?: string;
  twitter?: string;
  github?: string;
  instagram?: string;
  about?: string;
  location?: string;
  email: string;
  phone?: string;
  sessions?: { id: string, name: string }[];   // session id & name
}

export interface SESSION {
  id?: string;
  name: string;
  date: string;         // 2018-12-06
  timeStart: string;    // 15:30 for 3:30pm
  timeEnd?: string;
  location?: string;
  description?: string;
  speakerIDs: string[];   // speaker's id
  tracks: string[];     //  name of track
  hide?: boolean;
}

export interface PARTOFDAY {
  id?: string;
  indexKey?: number;
  name: string;    // morning, afternoon, evening, overnight
  timeFrom: string;
  timeTo: string;
}

export interface MAP {
  id?: string;
  name: string;
  lat: number;
  lng: number;
  center?: boolean;
}

export interface SUPPORT {
  id?: string;
  userId: string;
  date: string;             // 2018-12-19
  support: string;
}

export interface SESSION {
  id?: string;
  name: string;
  date: string;         // 2018-12-06
  timeStart: string;    // 15:30 for 3:30pm
  timeEnd?: string;
  location?: string;
  description?: string;
  speakerIDs: string[];   // speaker's id
  tracks: string[];     //  name of track
  hide?: boolean;
}

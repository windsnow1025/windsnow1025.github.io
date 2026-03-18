export interface Contact {
  type: string;
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  contacts: Contact[];
}

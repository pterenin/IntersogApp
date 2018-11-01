export const PROGRESS_NOTES = [
  {
    id: "1",
    user: "Daniel Marin",
    provider: "Rockford",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut urna sed ante feugiat rhoncus eu et tellus. Cras ut magna et turpis mattis hendrerit eu ut turpis.",
    date: "10/16/2018"
  },
  {
    id: "2",
    user: "Julia Fritch",
    provider: "NAZ",
    text:
      "Nunc rutrum euismod posuere. Fusce in velit arcu. Etiam fringilla risus vitae risus fringilla dapibus. Duis vel augue nunc. Phasellus tempus neque ac est gravida porta. Maecenas vulputate tempor dolor, vitae ultrices diam.",
    date: "10/16/2018"
  },
  {
    id: "3",
    user: "John Doe",
    provider: "Rockford",
    text:
      "Duis facilisis eget turpis sed lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi aliquam orci ac viverra ultricies.",
    date: "10/16/2018"
  }
];

export const ATTACHMENTS = [
  {
    id: "11",
    user: "John Doe",
    fileName: "UserDocument.pdf",
    provider: "NAZ",
    date: "10/16/2018"
  },
  {
    id: "12",
    user: "John Doe",
    fileName: "LoremIpsumDoloremIpsomLorem.jpg",
    provider: "Rockford",
    date: "10/16/2018"
  },
  {
    id: "14",
    user: "John Doe",
    fileName: "File.png",
    provider: "NAZ",
    date: "10/16/2018"
  }
];

export const SIZE_LIMITS = {
  minWidth: 280,
  maxWidth: 1000,
  minHeight: 200,
  maxHeight: 700
};
export const TABS = [
  { name: "progressNotes", icon: "file" },
  { name: "attachments", icon: "paperclip" }
];
export const INITIAL_SIZE = 360;
export const POSITIONS = ["right", "bottom"];

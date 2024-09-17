import FileSaver from "file-saver";
import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(promt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPromt = surpriseMePrompts[randomIndex];

  if (randomPromt === promt) return getRandomPrompt(promt);
  return randomPromt;
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}

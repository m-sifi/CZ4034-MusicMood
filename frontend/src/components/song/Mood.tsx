import { getMoodBackgroundColor, getMoodColor } from "@/features/classification";

interface MoodProps {
  mood: string;
}

export function Mood({ mood }: MoodProps) {
  const bgColor = getMoodBackgroundColor(mood);

  return (
    <span className={`${bgColor} px-2 py-0.5 rounded-md text-xs text-neutral-50`}>{mood.toLowerCase()}</span>
  );
}

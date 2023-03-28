import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconSearch, IconMicrophone } from "@tabler/icons-react";
import { useReactMediaRecorder } from "react-media-recorder";
import axios from "axios";
import MicRecorder from "mic-recorder-to-mp3";
import { start } from "repl";

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

export function Search({ onChange, value }: SearchProps) {
  const [searchValue, setSearchValue] = useState(value);
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = () => {
    Mp3Recorder.start()
      .then(() => {
        setIsRecording(true);
      })
      .catch((e: Error) => console.error(e));
  };

  const stopRecording = () => {
    Mp3Recorder.stop()
      .getMp3()
      .then(([buffer, blob]: [Uint8Array, Blob]) => {
        setIsRecording(false);
        const formData = new FormData();
        formData.append("audio", blob);
        axios
          .post("http://127.0.0.1:8000/uploadAudio", formData)
          .then((response) => {
            onChange(response.data.text);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((e: Error) => console.error(e));
  };

  const handleMicrophone = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="flex my-4 p-2 w-1/2 items-center bg-gray-100 rounded-lg"
      >
        <IconSearch color="gray" size={24}></IconSearch>
        <input
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          className="border-0 flex-1 bg-transparent text-gray-600 border-transparent focus:border-transparent focus:ring-0"
        />
        <button
          className="bg-red-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={() => onChange(searchValue)}
        >
          Search
        </button>
        <button
          className="bg-red-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleMicrophone()}
        >
          {isRecording ? (
            "Recording..."
          ) : (
            <IconMicrophone color="white" size={24}></IconMicrophone>
          )}
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

export default Search;

import { motion } from "framer-motion";
import SongHeader from "./SongHeader";

export function Song() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="flex flex-col overflow-y-auto p-4 align-middle bg-gray-200 rounded-md"
    >
      <SongHeader />
      <div className="pl-4">
        <h2 className="text-lg font-semibold mb-4">Lyrics</h2>
        <p>Well, you were the aftermath</p>
        <p>Of every judgment</p>
        <p>So cold by the sweat that</p>
        <p>You'll waste away</p>
        <p>And you carry your enemies</p>
        <p>But they're so familiar</p>
        <p>I'm sick of the company</p>
        <p>So I cull the shame</p>
        <p>And I know you'll say how I'm a burden</p>
        <p>Yeah, do your worst, all at once</p>
        <p>I know what you want from me (from me)</p>
        <p>I know what you're thinking</p>
        <p>And it's not the voice of all the others</p>
        <p>You've only said it to yourself</p>
        <p>I know what you want from me (from me)</p>
        <p>I know what you're thinking</p>
        <p>(They come to feel like things we're saying to ourselves)</p>
        <p>An inch from my ears again</p>
        <p>"You should be sorry"</p>
        <p>A solemn man</p>
        <p>"A better song could fix my problems"</p>
        <p>I'm tired of your questioning</p>
        <p>You're cut down too easily</p>
        <p>And I don't know what's good for me</p>
        <p>I can't decide</p>
        <p>And I know you'll say how I'm a burden</p>
        <p>Yeah, do your worst, all at once</p>
        <p>I know what you want from me (from me)</p>
        <p>I know what you're thinking</p>
        <p>And though they sound like one another</p>
        <p>You've only said it to yourself</p>
        <p>I know what you want from me (from me)</p>
        <p>I know what you're thinking</p>
        <p>"Now these voices have become our own"</p>
        <p>An inch from my ears again</p>
        <p>"You should be sorry"</p>
        <p>A solemn man</p>
        <p>"A better song could fix my problems"</p>
        <p>I'm tired of your questioning</p>
        <p>You're cut down too easily</p>
        <p>And I don't know what's good for me</p>
        <p>I can't decide</p>
        <p>And I know you'll say how I'm a burden</p>
        <p>Yeah, do your worst, all at once</p>
        <p>I know what you want from me (from me)</p>
        <p>I know what you're thinking</p>
        <p>And it's not the voice of all the others</p>
        <p>You've only said it to yourself</p>
        <p>I know what you want from me (from me)</p>
        <p>I know what you're thinking, thinking</p>
        <p>Thinking, thinking, thinking, think-</p>
        <p>And I know you'll say how I'm a burden</p>
        <p>Yeah, do your worst, all at once</p>
        <p>I know what you want from me (from me)</p>
        <p>I know what you're thinking, thinking, thinking</p>
        <p>And though they sound like one another</p>
        <p>You've only said it to yourself</p>
        <p>I know what you want from me (from me)</p>
        <p>I know what you're thinking, thinking</p>
        <p>Thinking, thinking, thinking, think-</p>
        <p>Sometimes, the inner voice is encouraging</p>
        <p>Calling for you to run those final few yards</p>
        <p>You're nearly there</p>
        <p>Keep going, keep going, keep going, keep going</p>
        <p>It will all be OK in the end</p>
      </div>
    </motion.div>
  );
}

export default Song;

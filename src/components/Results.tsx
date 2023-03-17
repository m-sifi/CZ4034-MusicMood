import { AnimatePresence, motion } from "framer-motion";

interface ResultsProps {
  visible: boolean;
}

export function Results({ visible }: ResultsProps) {
  return (
    <AnimatePresence mode='popLayout'>
      {visible && (
        <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="self-stretch flex-1 my-4 p-4 mx-auto text-center bg-gray-100 rounded-lg"
        >
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a luctus quam. Donec vehicula elit non egestas tristique. Nulla ut turpis et turpis auctor dictum sed pretium libero. Suspendisse arcu ipsum, rutrum quis tellus vitae, malesuada tempus diam. Ut sed nisl nulla. Curabitur sed ex ac ex tempor gravida. Pellentesque ac eros facilisis, egestas odio et, aliquet sapien. Nam gravida erat auctor neque pharetra, nec varius ante rhoncus. Pellentesque quis justo efficitur, dignissim ante pellentesque, tempor lectus. Suspendisse luctus bibendum placerat. Duis eu metus vel orci ullamcorper egestas. Pellentesque pretium pulvinar imperdiet. Donec massa libero, efficitur egestas elementum sit amet, gravida quis metus. Integer vestibulum enim id ipsum hendrerit vehicula.

Vestibulum eget libero vitae nulla iaculis semper sit amet aliquet nisi. Aliquam sed egestas quam. Quisque feugiat sodales dignissim. Donec eleifend dui a quam tempus lobortis. Phasellus rutrum velit eu purus aliquam dignissim eget eget ipsum. Cras cursus magna risus. Fusce in sagittis nunc. Proin sit amet commodo mi.

Nulla facilisi. Pellentesque sodales finibus turpis, nec malesuada lorem rutrum in. Duis a nibh consequat, bibendum arcu et, rhoncus justo. Fusce et libero nisi. Cras suscipit sodales mollis. Cras vitae leo porttitor, elementum metus ut, tempor purus. Nam porttitor est quam, vitae facilisis libero pretium a. Phasellus arcu sem, viverra ac ultricies quis, dapibus nec enim. Nam at lobortis leo. In ornare sem vel urna cursus, sit amet consectetur ante blandit. Nam dapibus sollicitudin imperdiet. Cras eleifend non ex non pretium. Fusce varius nunc et sollicitudin tempus.

Curabitur a pellentesque ipsum. Pellentesque eget lectus tortor. Maecenas a tristique ipsum, posuere euismod velit. Mauris elit lacus, lacinia eget condimentum eu, feugiat sit amet turpis. Integer viverra ornare metus, sed facilisis enim vulputate id. Nulla erat mauris, rutrum ut tortor quis, semper condimentum mauris. Pellentesque tortor felis, dictum non odio at, pharetra volutpat elit. Vivamus cursus molestie sapien ut tempor. Nulla egestas magna metus, at dignissim sem fringilla vitae. Vivamus luctus nisl magna, sed mattis risus porttitor ac. Nam convallis massa ut nisi molestie, sed imperdiet metus porta. Curabitur et velit diam. Aliquam egestas quam non dolor sodales posuere. Ut lectus lacus, vestibulum ac sagittis et, porttitor nec leo. Donec cursus mi in nisl luctus dapibus.

Praesent est felis, varius sed ullamcorper eget, ultrices a arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed nec neque eu augue interdum aliquam consectetur nec dolor. Ut efficitur, ex non fringilla tristique, ipsum magna tristique ipsum, sed eleifend nunc massa a purus. Sed nec suscipit augue. Integer tincidunt leo quis augue placerat condimentum. Cras mattis urna mauris.
            </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Results;

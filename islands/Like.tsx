import { useState } from "preact/hooks";
import Heart from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/heart.tsx";

function Button() {
  const [state, setState] = useState(false);

  const handleLike = () => {
    if (!state) {
      setState(true);
      return;
    }
    setState(false);
    return;
  };
  return (
    <button
      onClick={handleLike}
      class={`like ${state ? "bg-like" : "bg-nolike"}`}
    >
      <Heart />
    </button>
  );
}

export default Button;

import { ref, type Ref } from "vue";

import type { Option } from '@sniptt/monads';

enum State {
    None = "None",
    On = "On",
    Off = "Off"
}

type Toggle = () => void;
type AnimationStyle = string;
type ReturningStyle = Ref<AnimationStyle>;

/**
 * @var animatedOnStart = Put this if animation start on load
 * @var beforeAnimate = Add this to set the style if the animation hasn't started
 * @var onAnimate = If animation state is on apply these style
 * @var offAnimate = If animation state is off apply these style
 */
export type ToggleAnimationOpts = {
    animatedOnStart: boolean,
    beforeAnimate: Option<AnimationStyle>,
    onAnimate: AnimationStyle,
    offAnimate: AnimationStyle,
};


/**
 * Custom hook for 2 - 3 way to animate, it has 3 state, if `animatedOnStart`
 * false it will set to `None`, if it true then it will set to `Off`
 * and `toggle` will toggle `On` and `Off` but if the state currently `None`
 * it will set to `On`
 * 
 * @param opts 
 * @returns [Toggle, AnimationStyle]
 */
export default function (opts: ToggleAnimationOpts): [Toggle, ReturningStyle] {
    let state = State.Off;
    const animateStyle = ref('');

    if (!opts.animatedOnStart) {
        state = State.None;
        animateStyle.value = opts.beforeAnimate.unwrapOr('');
    }


    const toggle = () => {
        if (state == State.None || state == State.Off) {
            state = State.On;

            // Do the animation
            animateStyle.value = opts.onAnimate;
        }
        else {
            state = State.Off;

            // Do the animation
            animateStyle.value = opts.offAnimate;
        }
        console.log(animateStyle.value);
    };
    return [toggle, animateStyle];
}

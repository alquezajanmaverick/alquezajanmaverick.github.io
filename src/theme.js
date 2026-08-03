import { ref } from "vue";

const isNegative = ref(document.documentElement.classList.contains("negative"));

export function useTheme() {
  const toggle = () => {
    isNegative.value = !isNegative.value;
    document.documentElement.classList.toggle("negative", isNegative.value);
    localStorage.theme = isNegative.value ? "negative" : "paper";
  };

  return { isNegative, toggle };
}

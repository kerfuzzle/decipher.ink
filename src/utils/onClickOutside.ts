import type { Directive } from 'vue';

export const onClickOutside: Directive = {
	beforeMount(element, binding) {
		element.onClickOutside = (event: PointerEvent) => {
			if (!(element === event.target || element.contains(event.target))) {
				binding.value(event);
			}
		};
		document.body.addEventListener('click', element.onClickOutside);
	},
	unmounted(element) {
		document.body.removeEventListener('click', element.onClickOutside);
	},
};
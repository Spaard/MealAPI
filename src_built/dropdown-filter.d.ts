import { LitElement } from 'lit';
import './small-drop';
export declare class DropdownFilter extends LitElement {
    isOpen: boolean;
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    private toggleMenu;
}
declare global {
    interface HTMLElementTagNameMap {
        'dropdown-filter': DropdownFilter;
    }
}
//# sourceMappingURL=dropdown-filter.d.ts.map
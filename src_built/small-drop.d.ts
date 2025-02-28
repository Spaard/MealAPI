import { LitElement } from 'lit';
export declare class smallDrop extends LitElement {
    isOpen: boolean;
    static styles: import("lit").CSSResult;
    filterName: string;
    render(): import("lit-html").TemplateResult<1>;
    private toggleDropdown;
}
declare global {
    interface HTMLElementTagNameMap {
        'small-drop': smallDrop;
    }
}
//# sourceMappingURL=small-drop.d.ts.map
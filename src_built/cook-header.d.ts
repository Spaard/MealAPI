/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
export declare class HeaderElement extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    private _onClick;
    handleClick(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'cook-header': HeaderElement;
    }
}
//# sourceMappingURL=cook-header.d.ts.map
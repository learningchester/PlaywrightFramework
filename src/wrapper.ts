import { Locator, Page } from "@playwright/test";

export default class Wrapper {

    constructor(public page: Page) {
        page.setViewportSize({ width: 1920, height: 1080 })
    }

    public async findLocator(value: string, options?: {
        frame?: string,
        tabid?: number,
        timout?: number,
        has: Locator,
        hasText: string
    }): Promise<Locator> {


        if (options?.tabid) {
            this.page = this.page.context().pages[options.tabid]
        }
        if (options?.frame) {
            this.page.frameLocator(options.frame).locator(value)
        }
        return this.page.locator(value, {
            has: options?.has,
            hasText: options?.hasText
        })

    }

    public getUrl(): string {
        return this.page.url()
    }

    public clickElement(value: string, options?: {
        clickCount?: number,
        force?: boolean
    }) {
        return this.page.locator(value).click({
            clickCount: options?.clickCount,
            force: options?.force
        })
    }

}
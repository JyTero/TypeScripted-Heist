export class WindowManagement {
    private subWindows: Map<string, Window> = new Map<string, Window>();
    public RegisterWindow(window: Window) {
        this.subWindows.set(window.name, window);
    }
    public CloseAllSubWindows() {
        this.subWindows.forEach((value: Window, key: string) => {
            value.close();
        });
    }
}
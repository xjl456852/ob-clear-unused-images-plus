import { Plugin, TFile, Notice } from 'obsidian';
import { ObClearImagesSettingsTab } from './settings';
import { ObClearImagesSettings, DEFAULT_SETTINGS } from './settings';
import { LogsModal } from './modals';
import * as Util from './util';

export default class ObClearImages extends Plugin {
    settings: ObClearImagesSettings;
    ribbonIconEl: HTMLElement | undefined = undefined;

    async onload() {
        console.log('Clear Unused Images Plus plugin loaded...');
        this.addSettingTab(new ObClearImagesSettingsTab(this.app, this));
        await this.loadSettings();
        this.addCommand({
            id: 'clear-images-obsidian-plus',
            name: 'Clear Unused Images Plus',
            callback: () => this.clearUnusedAttachments('image'),
        });
        this.addCommand({
            id: 'clear-unused-attachments-plus',
            name: 'Clear Unused Attachments Plus',
            callback: () => this.clearUnusedAttachments('all'),
        });
        this.refreshIconRibbon();
    }

    onunload() {
        console.log('Clear Unused Images Plus plugin unloaded...');
    }

    async loadSettings() {
        this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    }

    async saveSettings() {
        await this.saveData(this.settings);
    }

    refreshIconRibbon = () => {
        this.ribbonIconEl?.remove();
        if (this.settings.ribbonIcon) {
            this.ribbonIconEl = this.addRibbonIcon('image-file', 'Clear Unused Images Plus', (event): void => {
                this.clearUnusedAttachments('image');
            });
        }
    };

    // Compare Used Images with all images and return unused ones
    clearUnusedAttachments = async (type: 'all' | 'image') => {
        var unusedAttachments: TFile[] = await Util.getUnusedAttachments(this.app, type);
        var len = unusedAttachments.length;
        if (len > 0) {
            let logs = '';
            logs += `[+] ${Util.getFormattedDate()}: Clearing started.</br>`;
            Util.deleteFilesInTheList(unusedAttachments, this, this.app).then(({ deletedImages, textToView }) => {
                logs += textToView;
                logs += '[+] ' + deletedImages.toString() + ' image(s) in total deleted.</br>';
                logs += `[+] ${Util.getFormattedDate()}: Clearing completed.`;
                if (this.settings.logsModal) {
                    let modal = new LogsModal(logs, this.app);
                    modal.open();
                }
            });
        } else {
            new Notice(`All ${type === 'image' ? 'images' : 'attachments'} are used. Nothing was deleted.`);
        }
    };
}

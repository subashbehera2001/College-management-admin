import { Component } from '@angular/core'
import { PageTitle } from '@app/components/page-title/page-title'
import { UiCard } from '@app/components/ui-card'
import { NgIcon } from '@ng-icons/core'
import { FileUploader } from '@app/components/file-uploader'

@Component({
  selector: 'app-file-uploads',
  imports: [PageTitle, UiCard, NgIcon, FileUploader],
  templateUrl: './file-uploads.html',
  styles: ``,
})
export class FileUploads {}

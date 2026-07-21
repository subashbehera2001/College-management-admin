import { Component, computed } from '@angular/core'
import { PageTitle } from '@app/components/page-title/page-title'
import { NgIcon } from '@ng-icons/core'
import { countries } from '@/app/views/icons/flags/data'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-flags',
  imports: [PageTitle, NgIcon, FormsModule],
  templateUrl: './flags.html',
  styles: ``,
})
export class Flags {
  countries = countries
  search = ''

  get filteredCountries() {
    const query = this.search.toLowerCase().trim()
    if (!query) return this.countries
    return this.countries.filter(
      (country) =>
        country.name.toLowerCase().includes(query) ||
        country.code.toLowerCase().includes(query)
    )
  }
}

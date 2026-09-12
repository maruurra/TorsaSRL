import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnDestroy {
  // CAMBIAR CONTACTO: modificá esta dirección si cambia el correo de consultas.
  readonly contactEmail = 'constru.obrasytelecomunicacion@gmail.com';
  private observer?: IntersectionObserver;

  form = { name: '', email: '', service: '', message: '' };

  ngAfterViewInit(): void {
    if (!('IntersectionObserver' in window)) return;

    this.observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          this.observer?.unobserve(entry.target);
        }
      }
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach((element) => this.observer?.observe(element));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  sendInquiry(): void {
    const subject = `Consulta por ${this.form.service} - ${this.form.name}`;
    const body = [
      `Nombre: ${this.form.name}`,
      `Correo: ${this.form.email}`,
      `Servicio: ${this.form.service}`,
      '',
      this.form.message
    ].join('\n');

    window.location.href = `mailto:${this.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}

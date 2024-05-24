
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ContenidoComponent } from './contenido.component';
import { ContenidoService } from '../_servicios/contenido.service';
import { TestBed } from '@angular/core/testing';

describe('ContenidoService', () => {
  let service: ContenidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContenidoService]
    });
    service = TestBed.inject(ContenidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

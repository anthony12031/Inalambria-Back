import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Purchase } from './models/Purchase.model';
import { FunEvent } from './models/FunEvent.model';
import { User } from './models/User.model';
import { CreateEventDto } from './DTO/createEvent.dto';
import { RegisterPurchaseDto } from './DTO/registerPurchase.dto';

describe('AppController', () => {
  let appService: AppService;

  const MockRepository = jest.fn().mockImplementation(() => {
    return {
      create: jest.fn(),
      save: jest.fn(),
      find: jest.fn(),
      findOne: jest.fn(),
    };
  });
  const mockRepository = new MockRepository();

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [
        AppService,
        {
          provide: getRepositoryToken(FunEvent),
          useValue: mockRepository,
        },
        {
          provide: getRepositoryToken(User),
          useValue: mockRepository,
        },
        {
          provide: getRepositoryToken(Purchase),
          useValue: mockRepository,
        }],
    }).compile();

    appService = app.get<AppService>(AppService);
  });

  it('should get all registered events', () => {
     const result  = appService.getEvents();
     expect(mockRepository.find).toHaveBeenCalledTimes(1);
     expect(mockRepository.find).toHaveBeenCalledWith();
  });

  it('should get a specific registered event', () => {
    const eventId = 5;

    const result  = appService.getEvent(eventId);

    expect(mockRepository.findOne).toHaveBeenCalledTimes(1);
    expect(mockRepository.findOne).toHaveBeenCalledWith(eventId);
 });

  it('should create an event', async () => {
    const createEventDto = new CreateEventDto();
    createEventDto.capacity = 5;
    createEventDto.date = new Date();
    createEventDto.description = 'event description';
    createEventDto.name = 'event name';

    const funEvent = new FunEvent();
    funEvent.name = createEventDto.name;
    funEvent.description = createEventDto.description;
    funEvent.date = createEventDto.date;
    const user = new User();
    user.username = 'Anthony';
    funEvent.User = user;

    const result = await appService.createEvent(createEventDto);

    expect(result).toBe(true);
    expect(mockRepository.save).toHaveBeenCalledTimes(1);
    expect(mockRepository.save).toHaveBeenCalledWith(funEvent);
});

  it('should register a purchase', async () => {
    const registerPurchase = new RegisterPurchaseDto();
    registerPurchase.numEntrances = 20;
    const eventId = 5;
    mockRepository.findOne.mockReturnValueOnce(Promise.resolve(new FunEvent()))
    .mockReturnValueOnce((Promise.resolve(null)));

    const result = await appService.registerPurchase(registerPurchase, eventId);
    const result1 = await appService.registerPurchase(registerPurchase, eventId);

    expect(result).toBe(true);
    expect(result1).toBe(false);

});

});

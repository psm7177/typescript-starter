import { Injectable } from '@nestjs/common';
import { VoteDto } from './dto/vote.dto';

@Injectable()
export class VoteService {
  findOne(id: string): VoteDto {
    const data: VoteDto = {
      id: '1234',
      question: '오인혁같은 딸 낳기 vs 박상민 같은 딸 낳기',
    };
    return data;
  }

  vote(id: string, choice: string) {
    const 
  }
}

import { Controller, Get, Param } from '@nestjs/common';
import { VoteService } from './vote.service';
import { VoteDto } from './dto/vote.dto';

@Controller('vote')
export class VoteController {
  constructor(private readonly voteService: VoteService) {}

  @Get(':id')
  findOne(@Param('id') id: string): VoteDto {
    return this.voteService.findOne(id);
  }
}

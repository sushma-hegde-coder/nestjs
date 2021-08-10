import { Injectable } from '@nestjs/common';
const Queue = require('bull');

@Injectable()
export class AppService {
  async getHello() {
    // create a queue and and jobs to queue
    // first job is added to queue, it is processed and then it gets completed
    const myFirstQueue = new Queue('my-first-queue');

    const job1 = await myFirstQueue.add({
      name: 'sushma',
      age: '20',
      phoneno: '44433445',
    });
    const job2 = await myFirstQueue.add({
      name: 'rashmi',
      age: '25',
      phoneno: '66744433445',
    });
    const job3 = await myFirstQueue.add({
      name: 'raghav',
      age: '29',
      phoneno: '990978445',
    });

    myFirstQueue.process(async (job) => {
      console.log('job data is', job.data);
      return job.data;
    });

    myFirstQueue.on('completed', (job, result) => {
      console.log(
        `Job with id ${job.id} and name ${job.name} has been completed with result ${result}`,
      );
    });
  }
}

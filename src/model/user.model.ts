export class User {
  firstName: string;
  lastName: string;
  sex: string;
  experience: number;
  profession: string[];
  tool: string[];
  continent: string;
  command: string[];

  constructor(
    firstName: string,
    lastName: string,
    sex: string,
    experience: number,
    profession: string[],
    tool: string[],
    continent: string,
    command: string[]
    ) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.sex = sex;
    this.experience = experience;
    this.profession = profession;
    this.tool = tool;
    this.continent = continent;
    this.command = command;
  }
}

import { Entity, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class Wall {

  @ObjectIdColumn()
  id?: string;

  @Column()
  width: number;
  
  @Column()
  height: number;
  
  @Column()
  doors: number;
  
  @Column()
  windows: number;
}


@Entity()
export class Ink {

  @ObjectIdColumn()
  id: string;

  @Column({ type: 'datetime' })
  createdAt: number;

  @Column()
  canSize: number;

  @Column()
  'wall-a': Wall;

  @Column()
  'wall-b': Wall;

  @Column()
  'wall-c': Wall;

  @Column()
  'wall-d': Wall;
}

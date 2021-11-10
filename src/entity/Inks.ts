import { Entity, ObjectIdColumn, ObjectID, Column } from 'typeorm';


@Entity()
export class Wall {

  @ObjectIdColumn()
  id?: ObjectID;

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
  id: ObjectID;

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
